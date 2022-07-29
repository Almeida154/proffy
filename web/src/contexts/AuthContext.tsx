import React, { useState, useEffect, useContext } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { UserType } from '../@types/userType';
import { useToast } from './ToastContext';

import api from '../services/api';

interface AuthContextI {
  signed: boolean;
  user: UserType | null;
  signIn: (
    email: string,
    password: string,
    keepLogged: boolean
  ) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = React.createContext<AuthContextI>({} as AuthContextI);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<ContextProvider> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setLoading] = useState(true);

  const { show } = useToast();
  const navigate = useNavigate();

  function setAxiosTokenAuthorization(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@proffy:user');
    const storagedToken = localStorage.getItem('@proffy:token');

    if (storagedUser && storagedToken) {
      const newUser = JSON.parse(storagedUser);
      setUser(newUser);
      setAxiosTokenAuthorization(storagedToken);
    }

    setLoading(false);
  }, []);

  async function signIn(
    email: string,
    password: string,
    keepLogged: boolean
  ) {
    try {
      const { data } = await api.post('log-in', {
        email,
        password,
        keepLogged,
      });

      setUser(data.user);
      localStorage.setItem('@proffy:user', JSON.stringify(data.user));
      localStorage.setItem('@proffy:token', data.token);

      setAxiosTokenAuthorization(data.token);
      navigate('/landing', { replace: true });
    } catch (error) {
      const err = error as AxiosError;
      const { message } = err.response?.data as ErrorResponse;
      show.error(message);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@proffy:user');
    localStorage.removeItem('@proffy:token');
    delete api.defaults.headers.common['Authorization'];
    navigate('/');
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signIn, signOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

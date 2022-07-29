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
}

const AuthContext = React.createContext<AuthContextI>(
  {} as AuthContextI
);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<ContextProvider> = ({
  children,
}) => {
  const [user, setUser] = useState<UserType | null>(null);

  const { show } = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('@proffy:user');
    const token = localStorage.getItem('@proffy:token');

    if (user && token) {
      setUser(JSON.parse(user));
    }
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

      console.log(data.user);

      setUser(data.user);
      localStorage.setItem('@proffy:user', JSON.stringify(data.user));
      localStorage.setItem('@proffy:token', data.token);

      const token = `Bearer ${data.token}`;
      api.defaults.headers.common['Authorization'] = token;
      navigate('landing');
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
      value={{ user, signed: !!user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { ReactNode } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';

import PasswordRecovery, {
  Successfully as SuccessfullyPasswordRecovery,
} from './pages/PasswordRecovery';

import SignUp, {
  Successfully as SuccessfullyUserSignUp,
} from './pages/SignUp';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

import { useAuth } from './contexts/AuthContext';

interface ProtectedRouteI {
  children?: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteI) {
  const { signed } = useAuth();

  console.log(signed);

  if (!signed) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

const AppRoutes = () => {
  const { signed } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/password-recovery"
        element={<PasswordRecovery />}
      />
      <Route
        path="/successfully-password-recovery"
        element={<SuccessfullyPasswordRecovery />}
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/successfully-sign-up"
        element={<SuccessfullyUserSignUp />}
      />

      <Route
        path="/landing"
        element={signed ? <Landing /> : <Navigate to="/" replace />}
      />
      <Route
        path="/study"
        element={
          signed ? <TeacherList /> : <Navigate to="/" replace />
        }
      />
      <Route
        path="/give-classes"
        element={
          signed ? <TeacherForm /> : <Navigate to="/" replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;

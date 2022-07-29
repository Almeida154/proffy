import { ReactNode } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from 'react-router-dom';

import SignIn from './pages/SignIn';
import Recovery, { SuccessfullyRecovery } from './pages/PasswordRecovery';
import SignUp, { SuccessfullySignUp } from './pages/SignUp';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

import { useAuth } from './contexts/AuthContext';

const AppRoutes = () => {
  const { signed, isLoading } = useAuth();

  function RequireAuth() {
    const location = useLocation();

    if (!signed) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
  }

  if (isLoading) {
    return <h1>CARREGANDO!!!!!!!!!</h1>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<SignIn />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/success-recovery" element={<SuccessfullyRecovery />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/success-sign-up" element={<SuccessfullySignUp />} />

      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="/landing" element={<Landing />} />
        <Route path="/give-classes" element={<TeacherForm />} />
        <Route path="/study" element={<TeacherList />} />
      </Route>

      {/* Missing routes */}
      <Route path="*" element={<h1>Not found paizao</h1>} />
    </Routes>
  );
};

export default AppRoutes;

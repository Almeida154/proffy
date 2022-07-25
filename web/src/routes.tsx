import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/password-recovery"
          element={<PasswordRecovery />}
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

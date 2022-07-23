import React from 'react';

import { Backdrop, TextField } from '@mui/material';

import './styles.scss';
import { shadows } from '@mui/system';
import Input from '../../components/Input';

const Login: React.FC = () => {
  return (
    <div id="login-page">
      <div className="container">
        <form>
          <fieldset>
            <legend>Fazer login</legend>
            <Input
              label="E-mail"
              name="email"
              type="email"
              isTheFirstOne
            />
            <Input
              label="Password"
              name="password"
              type="password"
              isTheLastOne
            />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;

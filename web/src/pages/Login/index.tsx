import { FormEvent, useState } from 'react';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/images/logo.svg';

import './styles.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  function handleRememberPasswordToggle() {
    setRememberPassword(!rememberPassword);
  }

  function handleUserLogin(e: FormEvent) {
    e.preventDefault();
    console.debug('login data', {
      email,
      password,
      rememberPassword,
    });
  }

  return (
    <div id="login-page">
      <div className="brand-container">
        <div>
          <img src={logo} alt="Logo" />
          <p>
            Sua plataforma de <br /> estudos online
          </p>
        </div>
      </div>

      <div className="form-container">
        <form onSubmit={handleUserLogin}>
          <fieldset>
            <legend>Fazer login</legend>
            <Input
              label="E-mail"
              name="email"
              type="email"
              isTheFirstOne
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              name="password"
              isPassword
              isTheLastOne
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          <div className="options">
            <div className="remember-password">
              <Checkbox
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 28,
                  },
                  padding: 0,
                  color: '#04d361',
                  '&.Mui-checked': {
                    color: '#04d361',
                  },
                }}
                checked={rememberPassword}
                onClick={handleRememberPasswordToggle}
              />
              <p>Lembrar minha senha</p>
            </div>

            <Link to="password-recovery">Esqueci minha senha</Link>
          </div>

          <Button
            text="Entrar"
            disabled={email === '' || password === ''}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;

import { FormEvent, useState } from 'react';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import BrandSection from '../../components/BrandSection';
import Form from '../../components/Form';

import heartIC from '../../assets/images/icons/purple-heart.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

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

    if (!checkEmptyFields([email, password]))
      return alert('Preencha todos os campos');
  }

  return (
    <div id="login-page">
      <BrandSection />

      <Form formSubmit={handleUserLogin}>
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
            <p>Lembrar-me</p>
          </div>

          <Link to="password-recovery">Esqueci minha senha</Link>
        </div>

        <Button
          text="Entrar"
          disabled={email === '' || password === ''}
        />

        <footer>
          <div className="options">
            <div>
              <p>Não tem conta?</p>
              <Link to="sign-up">Cadastre-se</Link>
            </div>

            <span>
              É de graça <img src={heartIC} alt="Coração roxo" />
            </span>
          </div>
        </footer>
      </Form>
    </div>
  );
};

export default Login;

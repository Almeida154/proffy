import { FormEvent, useState } from 'react';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import BrandSection from '../../components/BrandSection';
import Form from '../../components/Form';

import heartIC from '../../assets/images/icons/purple-heart.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

import { useToast } from '../../contexts/ToastContext';
import { useAuth } from '../../contexts/AuthContext';

import './styles.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogged, setKeepLogged] = useState(false);

  const { show } = useToast();
  const { signIn } = useAuth();

  function handleKeepLoggedToggle() {
    setKeepLogged(!keepLogged);
  }

  async function handleUserLogin(e: FormEvent) {
    e.preventDefault();

    if (!checkEmptyFields([email, password]))
      return show.error('Preencha todos os campos');

    await signIn(email, password, keepLogged);
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
              checked={keepLogged}
              onClick={handleKeepLoggedToggle}
            />
            <p>Lembrar-me</p>
          </div>

          <Link to="password-recovery">Esqueci minha senha</Link>
        </div>

        <Button text="Entrar" disabled={email === '' || password === ''} />

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

export default SignIn;

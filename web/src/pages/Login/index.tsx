import { useState } from 'react';
import Button from '../../components/Button';

import Input from '../../components/Input';

import './styles.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

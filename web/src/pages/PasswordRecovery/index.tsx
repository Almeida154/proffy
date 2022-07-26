import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import BrandSection from '../../components/BrandSection';
import Success from '../../components/Success/styles';

import backIC from '../../assets/images/icons/back.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

import './styles.scss';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function handlePasswordRecovery(e: FormEvent) {
    e.preventDefault();

    console.debug('password recovery data', {
      email,
    });

    if (!checkEmptyFields([email]))
      return alert('Preencha todos os campos');

    navigate('/successfully-password-recovery');
  }

  return (
    <div id="password-recovery-page">
      <Form formSubmit={handlePasswordRecovery}>
        <Link to="/">
          <img src={backIC} alt="" />
        </Link>

        <fieldset>
          <legend>
            Eita, esqueceu <br /> sua senha?
          </legend>
          <span className="subtitle">
            Não esquenta, vamos dar um jeito nisso.
          </span>

          <Input
            label="E-mail"
            name="email"
            type="email"
            isTheFirstOne
            isTheLastOne
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <Button text="Enviar" disabled={email === ''} />
      </Form>

      <BrandSection />
    </div>
  );
};

export const Successfully: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Success
      title="Redefinição enviada!"
      subtitle="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
      buttonProps={{
        text: 'Voltar ao login',
        onClick: () => navigate('/'),
      }}
    />
  );
};

export default PasswordRecovery;

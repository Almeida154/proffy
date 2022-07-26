import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Form from '../../components/Form';
import BrandSection from '../../components/BrandSection';

import backIC from '../../assets/images/icons/back.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

import './styles.scss';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  function handlePasswordRecovery(e: FormEvent) {
    e.preventDefault();

    console.debug('password recovery data', {
      email,
    });

    if (!checkEmptyFields([email]))
      return alert('Preencha todos os campos');
  }

  return (
    <div id="password-recovery-page">
      <Form formSubmit={handlePasswordRecovery}>
        <Link to="/">
          <img src={backIC} alt="" />
        </Link>

        <fieldset>
          <legend>Cadastro</legend>
          <span className="subtitle">
            Preencha os dados abaixo <br /> para começar
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

export default PasswordRecovery;

import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import BrandSection from '../../components/BrandSection';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

import backIC from '../../assets/images/icons/back.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

import './styles.scss';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUserSignUp(e: FormEvent) {
    e.preventDefault();

    console.debug('signin data', {
      name,
      middleName,
      email,
      password,
    });

    if (!checkEmptyFields([name, middleName, email, password]))
      return alert('Preencha todos os campos');
  }

  return (
    <div id="signup-page">
      <Form formSubmit={handleUserSignUp}>
        <Link to="/">
          <img src={backIC} alt="" />
        </Link>

        <fieldset>
          <legend>Cadastro</legend>
          <span className="subtitle">
            Preencha os dados abaixo <br /> para começar
          </span>

          <Input
            label="Nome"
            name="name"
            type="name"
            isTheFirstOne
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Sobrenome"
            name="middleName"
            type="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <Input
            label="E-mail"
            name="email"
            type="email"
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
          text="Concluir cadastro"
          disabled={
            name === '' ||
            middleName === '' ||
            email === '' ||
            password === ''
          }
        />
      </Form>

      <BrandSection />
    </div>
  );
};

export default SignUp;

import React, { FormEvent, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AxiosError } from 'axios';

import api from '../../services/api';

import BrandSection from '../../components/BrandSection';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Success from '../../components/Success/styles';

import backIC from '../../assets/images/icons/back.svg';

import checkEmptyFields from '../../utils/checkEmptyFields';

import './styles.scss';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const emailInputRef = useRef<HTMLInputElement>(null);

  async function handleUserSignUp(e: FormEvent) {
    e.preventDefault();

    if (!checkEmptyFields([name, lastname, email, password]))
      return alert('Preencha todos os campos');

    try {
      await api.post('sign-in', {
        name,
        lastname,
        email,
        password,
      });
      navigate('/successfully-sign-up');
    } catch (error) {
      const err = error as AxiosError;
      const { message, field } = err.response?.data as ErrorResponse;

      if (field == 'email') {
        setEmailError(message);
        emailInputRef.current?.focus();
      }
    }
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
            Preencha os dados abaixo <br /> para começar.
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
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <Input
            inputRef={emailInputRef}
            label="E-mail"
            name="email"
            type="email"
            error={emailError != null}
            value={email}
            onChange={(e) => {
              setEmailError(null);
              setEmail(e.target.value);
            }}
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
            lastname === '' ||
            email === '' ||
            password === ''
          }
        />
      </Form>

      <BrandSection />
    </div>
  );
};

export const Successfully: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Success
      title="Cadastro concluído!"
      subtitle="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência."
      buttonProps={{
        text: 'Fazer login',
        onClick: () => navigate('/'),
      }}
    />
  );
};

export default SignUp;

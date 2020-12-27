import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  function handleSubmit(data: any):void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

          <Button type="submit">Entrar</Button>

          <Link to="forgot">Esqueci minha senha</Link>
        </Form>

        <Link to="/create-account">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;

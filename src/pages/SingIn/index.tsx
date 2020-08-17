import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import imgLogo from '../../assets/logo.png';

import {
  Container,
  Title,
  ForgotPassord,
  ForgotPassordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: object) => {

  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined }
      >
        <ScrollView contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={imgLogo} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Form onSubmit={handleSignIn} ref={formRef}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />

              <Button onPress={() => { formRef.current?.submitForm(); }}>Entrar</Button>
            </Form>

            <ForgotPassord onPress={() => {console.log('teste')}}>
              <ForgotPassordText>
                Esqueci minha senha
              </ForgotPassordText>
            </ForgotPassord>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>
          Criar uma conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
}

export default SignIn;

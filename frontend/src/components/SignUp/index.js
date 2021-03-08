import React from 'react';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from '../SignIn/SigninElements';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Your Task Manager</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign Up to your account</FormH1>
              <FormLabel htmlFor='for'>Full Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>User Name</FormLabel>
              <FormInput type='username' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' placeholder="Enter Password" name="psw" required />
              <FormLabel htmlFor='for'>Repeat Password</FormLabel>
              <FormInput type='password' placeholder="Repeat Password" name="psw-repeat" required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
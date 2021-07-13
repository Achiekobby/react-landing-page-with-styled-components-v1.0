import React from "react";
import {
  Container,
  Form,
  Icon,
  FormContent,
  FormH1,
  FormInput,
  FormWrap,
  FormLabel,
  FormButton,
  Text,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">QuickPay</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your Account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Proceed</FormButton>
            <Text>Forget Password ? </Text>
          </Form>
        </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

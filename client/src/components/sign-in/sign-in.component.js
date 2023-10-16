import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  SignInSection,
} from "./sign-in.styles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          required
          handleChange={handleChange}
          value={email}
          label="email"
        />

        <FormInput
          type="password"
          name="password"
          required
          handleChange={handleChange}
          value={password}
          label="password"
        />

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google{" "}
          </CustomButton>
        </ButtonsBarContainer>
        <SignInSection>
          <span>Already a member? <Link to="/signup">Sign up</Link></span>
        </SignInSection>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);

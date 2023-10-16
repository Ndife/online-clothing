import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  text-align: center;

  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr;
  }
`;
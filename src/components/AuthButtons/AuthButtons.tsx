import styled from 'styled-components';

const StyledRegisterButton = styled.button`
  padding: 10px 20px;
  background-color: #1e1e1e;
  color: white;
  width: 110px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  border: 2px solid transparent; /* Спочатку border прозорий */

  &:hover,
  &:focus {
    background-color: white;
    border-color: #005bc5; /* Міняємо тільки колір бордера */
    color: #005bc5;
    cursor: pointer;
  }
`;

const StyledSignInButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #1e1e1e;
  color: #1e1e1e;
  width: 99px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: #005bc5;
    color: white;
    cursor: pointer;
  }
`;

export const AuthButtons = () => {
  return (
    <>
      <StyledRegisterButton type="button">Register</StyledRegisterButton>
      <StyledSignInButton type="button">Sign in</StyledSignInButton>
    </>
  );
};

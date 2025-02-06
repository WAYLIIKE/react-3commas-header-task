import styled from 'styled-components';

const StyledRegisterButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-dark);
  color: white;
  width: 110px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--animation);
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: white;
    border-color: var(--color-blue);
    color: var(--color-blue);
    cursor: pointer;
  }
`;

const StyledSignInButton = styled.button`
  padding: 10px 20px;
  border: 2px solid var(--color-dark);
  color: var(--color-dark);
  width: 99px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--animation);
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-color: var(--color-blue);
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

import { Container } from '../../components/Container/Container';
import { Header } from '../../components/Header/Header';
import styled from 'styled-components';

const StyledMessage = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-top: 50px;
  padding: 20px;
`;

const ErrorPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Container>
          <StyledMessage>
            🚧 Oops! This page is still under construction. <br />
            But don’t worry, we’re working hard to make it awesome! 🚀
          </StyledMessage>
        </Container>
      </Container>
    </>
  );
};

export default ErrorPage;

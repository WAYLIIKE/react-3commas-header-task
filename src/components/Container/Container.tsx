import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;

  @media (min-width: 1439px) {
    max-width: 1320px;
  }
`;

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

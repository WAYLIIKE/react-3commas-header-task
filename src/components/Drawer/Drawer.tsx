import { useState } from 'react';
import styled from 'styled-components';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { Navigation } from '../Navigation/Navigation';

interface DrawerProps {
  isOpen: boolean;
}

const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 74px;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

const DrawerContent = styled.div<{ $isDropped: boolean }>`
  padding: 20px;
  padding-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 450px;
  gap: 20px;
  margin: 0 auto;

  .list {
    list-style: none;
    padding: 0;
  }

  .listItem:not(:nth-last-child(-n + 2)) {
    margin-bottom: 20px;
  }

  .backdrop li {
    margin-bottom: 20px;
  }

  .backdrop {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .backdrop div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .backdrop div:hover {
    cursor: pointer;
  }

  .dropped {
    max-height: ${({ $isDropped }) => ($isDropped ? '500px' : '0')};
    opacity: ${({ $isDropped }) => ($isDropped ? '1' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .authButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  nav ul li a {
    color: #1e1e1e;
    transition: color 0.2s ease-in-out;
  }

  nav ul li p {
    transition: color 0.2s ease-in-out;
  }

  nav ul li a:hover,
  nav ul li a:focus {
    color: #005bc5;
  }

  nav ul li p:hover,
  nav ul li p:focus {
    color: #005bc5;
  }
`;

export const Drawer = ({ isOpen }: DrawerProps) => {
  const [isDroppedList, setIsDroppedList] = useState<boolean>(false);

  const toggleDroppedList: () => void = () => {
    setIsDroppedList(prevState => !prevState);
  };

  return (
    <>
      <DrawerContainer $isOpen={isOpen}>
        <DrawerContent $isDropped={isDroppedList}>
          <nav>
            <Navigation
              isDroppedList={isDroppedList}
              toggleDroppedList={toggleDroppedList}
            />
          </nav>
          <div className="authButtons">
            <AuthButtons />
          </div>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

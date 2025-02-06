import { useState } from 'react';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { Navigation } from '../Navigation/Navigation';
import { DrawerContainer, DrawerContent } from './Drawer.styled';

interface DrawerProps {
  isOpen: boolean;
}

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

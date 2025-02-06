import { NavLink } from 'react-router-dom';
import { IconHamburger } from '../Icons/IconHamburger';
import { useEffect, useRef, useState } from 'react';
import { IconClose } from '../Icons/IconClose';
import { Drawer } from '../Drawer/Drawer';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { Navigation } from '../Navigation/Navigation';
import { ResponsiveHeader } from './Header.styled';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDroppedList, setIsDroppedList] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDrawer: () => void = () => {
    setIsOpen(prevState => !prevState);
  };

  const toggleDroppedList: () => void = () => {
    setIsDroppedList(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDroppedList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ResponsiveHeader $isDropped={isDroppedList}>
      <div className="headerWrapper">
        <nav className="navWrapper" ref={dropdownRef}>
          <Navigation
            isDroppedList={isDroppedList}
            toggleDroppedList={toggleDroppedList}
          />
        </nav>
        <NavLink to={'/'} className="logo">
          Logo
        </NavLink>
        <div className="buttonWrapper">
          <AuthButtons />
        </div>
        <div className="mobileMenu">
          {isOpen ? (
            <IconClose handleClick={toggleDrawer} />
          ) : (
            <IconHamburger handleClick={toggleDrawer} />
          )}
          <Drawer isOpen={isOpen} />
        </div>
      </div>
    </ResponsiveHeader>
  );
};

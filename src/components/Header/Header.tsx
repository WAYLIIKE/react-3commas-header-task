import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IconHamburger } from '../Icons/IconHamburger';
import { useState } from 'react';
import { IconClose } from '../Icons/IconClose';
import { Drawer } from '../Drawer/Drawer';
import { AuthButtons } from '../AuthButtons/AuthButtons';
import { Navigation } from '../Navigation/Navigation';

const ResponsiveHeader = styled.header<{ $isDropped: boolean }>`
  .headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    box-sizing: content-box;
  }

  .logo {
    font-size: 30px;
    font-weight: 800;
    color: transparent;
    -webkit-text-stroke: 2px #1e1e1e;
    letter-spacing: -0.03em;
    line-height: 34px;
  }

  .buttonWrapper {
    display: none;
  }

  .navWrapper {
    display: none;
  }

  .mobileMenu {
    max-height: 34px;
  }

  @media (min-width: 1439px) {
    .logo {
      font-size: 40px;
      width: 265px;
    }

    .mobileMenu {
      display: none;
    }

    .buttonWrapper {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .navWrapper {
      display: block;
    }

    .navWrapper .list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    .navWrapper .list a {
      color: #1e1e1e;
      transition: 0.3s ease-in-out;
    }

    .navWrapper .list .listItem {
      transition: 0.3s ease-in-out;
    }

    .navWrapper .list .listItem:hover,
    .navWrapper .list .listItem:focus {
      color: #005bc5;
    }

    .navWrapper .list a:hover,
    .navWrapper .list a:focus {
      color: #005bc5;
    }

    .backdrop {
      position: relative;
    }

    .navWrapper .backdrop div {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .navWrapper .backdrop div:hover {
      cursor: pointer;
    }

    /* Випадаючий список */
    .navWrapper ul .dropped {
      display: flex;
      flex-direction: column;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      min-width: 138px;
    }

    .navWrapper ul .dropped li {
      transition: 0.3s ease-in-out;
      width: 100%;
    }

    .navWrapper ul .dropped li a {
      display: block;
      width: 100%;
      padding: 12px 32px;
      text-decoration: none;
      color: #1e1e1e;
      transition: color 0.3s ease-in-out;
      box-sizing: border-box;
    }

    .navWrapper ul .dropped li:hover,
    .navWrapper ul .dropped li:focus {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    .navWrapper ul .dropped li:hover a,
    .navWrapper ul .dropped li:focus a {
      color: #005bc5;
    }

    .dropped {
      position: absolute;
      top: 37px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      max-height: ${({ $isDropped }) => ($isDropped ? '500px' : '0')};
      opacity: ${({ $isDropped }) => ($isDropped ? '1' : '0')};
      overflow: hidden;
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDroppedList, setIsDroppedList] = useState<boolean>(false);

  const toggleDrawer: () => void = () => {
    setIsOpen(prevState => !prevState);
  };

  const toggleDroppedList: () => void = () => {
    setIsDroppedList(prevState => !prevState);
  };

  return (
    <ResponsiveHeader $isDropped={isDroppedList}>
      <div className="headerWrapper">
        <nav className="navWrapper">
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

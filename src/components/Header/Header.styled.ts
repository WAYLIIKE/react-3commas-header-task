import styled from 'styled-components';

export const ResponsiveHeader = styled.header<{ $isDropped: boolean }>`
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
    -webkit-text-stroke: 2px var(--color-dark);
    letter-spacing: -0.03em;
    line-height: 1.13;
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
      color: var(--color-dark);
      transition: var(--animation);
    }

    .navWrapper .list .listItem {
      transition: var(--animation);
    }

    .navWrapper .list .listItem:hover,
    .navWrapper .list .listItem:focus {
      color: var(--color-blue);
    }

    .navWrapper .list a:hover,
    .navWrapper .list a:focus {
      color: var(--color-blue);
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
      transition: var(--animation);
      width: 100%;
    }

    .navWrapper ul .dropped li a {
      display: block;
      width: 100%;
      padding: 12px 32px;
      text-decoration: none;
      color: var(--color-dark);
      transition: color var(--animation);
      box-sizing: border-box;
    }

    .navWrapper ul .dropped li:hover,
    .navWrapper ul .dropped li:focus {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }

    .navWrapper ul .dropped li:hover a,
    .navWrapper ul .dropped li:focus a {
      color: var(--color-blue);
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
      transition: max-height var(--animation), opacity var(--animation);
    }
  }
`;
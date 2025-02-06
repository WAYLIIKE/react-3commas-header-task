import { NavLink } from 'react-router-dom';
import { IconList } from '../Icons/IconList';

interface NavigationProps {
  isDroppedList: boolean;
  toggleDroppedList: () => void;
}

export const Navigation = ({
  toggleDroppedList,
  isDroppedList,
}: NavigationProps) => {
  return (
    <>
      <ul className="list">
        <li className="listItem">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="listItem">
          <NavLink to="/about">About us</NavLink>
        </li>
        <li className="listItem backdrop">
          <div onClick={toggleDroppedList}>
            <p>Services</p>
            <IconList isDropped={isDroppedList} />
          </div>
          <ul className="dropped">
            <li>
              <NavLink to="/service1" className="service">
                Service 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/service2" className="service">
                Service 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/service3" className="service">
                Service 3
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="listItem">
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
      </ul>
    </>
  );
};

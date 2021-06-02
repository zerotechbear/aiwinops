import classes from '../../../styles/ProjectPanel/HeaderUI/NavHeader.module.css';

// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const navLinks = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Tutorials',
    path: '/tutorials',
  },
  {
    title: 'Help',
    path: '/help',
  },
];

const NavHeader = (props) => {
  // const [menuActive, setMenuActive] = useState(false);
  const { Search } = Input;

  const searchProjectHandler = (value) => {
    console.log(value);
  };
  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <NavLink to='/home'>AIWin</NavLink>
      </span>

      <nav className={classes.nav}>
        <div className={classes.menu}>
          <ul>
            <li>
              <Search
                placeholder='Search Project'
                onSearch={searchProjectHandler}
              />
            </li>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  activeClassName={classes.active}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            <span className={classes.avatar}>
              <Avatar size={80} icon={<UserOutlined />} />
            </span>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;

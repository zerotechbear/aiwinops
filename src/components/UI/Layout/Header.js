import { useContext } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';

import { Input, Avatar, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import classes from '../../../styles/UI/Layout/Header.module.css';

import AuthContext from '../../../store/auth-context';

const navLinks = [
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

const Header = () => {
  const { uid } = useParams();
  // const { Header } = Layout;
  const { Search } = Input;
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  // 搜尋專案 -> 可能透過Antd Table Column Filter
  const searchProjectHandler = (value) => {
    console.log(value);
  };

  const userMenu = (e) => {
    if (e.key === 'settings') {
      history.push(`/members/${uid}/settings`);
    }
    if (e.key === 'logout') {
      authCtx.logout();
      history.replace('/');
    }
  };

  const menu = (
    <Menu theme='dark' onClick={userMenu}>
      <Menu.Item key='settings' icon={<SettingOutlined />}>
        {/* 導向個人資訊頁面 -> /uid/settings */}
        Setting
      </Menu.Item>
      <Menu.Item key='logout' icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className={classes.header}>
      <span className={classes.logo}>
        <NavLink to={`/project/${uid}`}>AIWinOps</NavLink>
      </span>
      <nav className={classes.nav}>
        <div className={classes.menu}>
          <ul>
            <Search
              placeholder='Search Project'
              onSearch={searchProjectHandler}
              className={classes.search}
            />
            <li>
              <NavLink to={`/project/${uid}`} activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={`${link.path}/${uid}`} activeClassName={classes.active}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            <span className={classes.avatar}>
              <Dropdown overlay={menu} placement='bottomRight'>
                <Avatar size={50} icon={<UserOutlined />}></Avatar>
              </Dropdown>
            </span>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

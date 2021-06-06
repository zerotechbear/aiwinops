import { Link, NavLink } from 'react-router-dom';
import { Input, Avatar, Layout, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import classes from '../../../styles/UI/Layout/Header.module.css';

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

const menu = (
  <Menu>
    <Menu.Item>
      {/* 導向個人資訊頁面 -> /uid/settings */}
      <Link to='/settings'>Setting</Link>
    </Menu.Item>
    <Menu.Item>
      {/* 確認登出後刪除Token資訊 */}
      <Link to='/'>Logout</Link>
    </Menu.Item>
  </Menu>
);

const NavHeader = () => {
  const { Header } = Layout;
  const { Search } = Input;

  // 搜尋專案 -> 可能透過Antd Table Column Filter
  const searchProjectHandler = (value) => {
    console.log(value);
  };

  return (
    <Header className={classes.header}>
      <span className={classes.logo}>
        <NavLink to='/home'>AIWinOps</NavLink>
      </span>
      <nav className={classes.nav}>
        <div className={classes.menu}>
          <ul>
            <Search
              placeholder='Search Project'
              onSearch={searchProjectHandler}
              className={classes.search}
            />
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} activeClassName={classes.active}>
                  {link.title}
                </NavLink>
              </li>
            ))}
            <span className={classes.avatar}>
              <Dropdown overlay={menu} placement='bottomRight' arrow>
                <Avatar size={50} icon={<UserOutlined />}></Avatar>
              </Dropdown>
            </span>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

export default NavHeader;

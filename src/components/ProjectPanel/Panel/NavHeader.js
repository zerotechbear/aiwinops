import { NavLink } from 'react-router-dom';
import { Input, Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import classes from '../../../styles/ProjectPanel/Panel/NavHeader.module.css';

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

const NavHeader = () => {
  const { Header } = Layout;
  const { Search } = Input;

  // 搜尋專案的函數
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
              <Avatar size={50} icon={<UserOutlined />} />
            </span>
          </ul>
        </div>
      </nav>
    </Header>
  );
};

export default NavHeader;

// const NavHeader = (props) => {
//   // const [menuActive, setMenuActive] = useState(false);
//   const { Search } = Input;

//   const searchProjectHandler = (value) => {
//     console.log(value);
//   };
//   return (
//     <header className={classes.header}>
//       <span className={classes.logo}>
//         <NavLink to='/home'>AIWin</NavLink>
//       </span>

// <nav className={classes.nav}>
//   <div className={classes.menu}>
//     <ul>
//       <li>
//         <Search
//           placeholder='Search Project'
//           onSearch={searchProjectHandler}
//         />
//       </li>
//       {navLinks.map((link, index) => (
//         <li key={index}>
//           <NavLink
//             to={link.path}
//             activeClassName={classes.active}>
//             {link.title}
//           </NavLink>
//         </li>
//       ))}
//       <span className={classes.avatar}>
//         <Avatar size={50} icon={<UserOutlined />} />
//       </span>
//     </ul>
//   </div>
// </nav>
//     </header>
//   );
// };


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import classes from '../../../styles/ProjectPanel/Panel/NavLeft.module.css';


const NavLeft = () => {
  const { Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <Sider width={200} collapsed={collapsed}>
      <Button type='primary' onClick={toggleMenu} className={classes.foldBtn}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode='inline'
        theme='dark'
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          Project
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          Quota
        </Menu.Item>
        <Menu.Item key='4' icon={<UserOutlined />}>
          <Link to='/members'>Members</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default NavLeft;

/* <Menu
        
        defaultSelectedKeys={['1']}
        mode='inline'
        theme='white'
        inlineCollapsed={false}>
        
        {project.isSelected  && <Menu.Item key='5'>Report</Menu.Item>}
      </Menu>
    </div> */

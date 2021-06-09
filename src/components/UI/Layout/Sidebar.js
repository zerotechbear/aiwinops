import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  LineChartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import classes from '../../../styles/UI/Layout/Sidebar.module.css';


const Sidebar = () => {
  const { Sider } = Layout;
  const history = useHistory();

  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const panelInfoRouter = (e) => {
    history.push(`/${e.key}`);
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
        style={{ height: '100%', borderRight: 0 }}
        onClick={panelInfoRouter}>
        <Menu.Item key='home' icon={<PieChartOutlined />}>
          Project
        </Menu.Item>
        <Menu.Item key='dashboard' icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key='report' icon={<UserOutlined />}>
          <Link to='/report'>Report</Link>
        </Menu.Item>
        <Menu.Item key='quota' icon={<ContainerOutlined />}>
          Quota
        </Menu.Item>
        <Menu.Item key='members' icon={<UserOutlined />}>
          <Link to='/members'>Members</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

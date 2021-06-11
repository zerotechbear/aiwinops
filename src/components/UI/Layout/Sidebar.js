import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  const { uid } = useParams();
  const history = useHistory();

  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  const panelInfoRouter = (e) => {
    history.push(`/${e.key}/${uid}`);
  };

  return (
    <Sider width={200} collapsed={collapsed}>
      <Button type='primary' onClick={toggleMenu} className={classes.foldBtn}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode='inline'
        theme='dark'
        defaultSelectedKeys={['project']}
        style={{ height: '100%', borderRight: 0 }}
        onClick={panelInfoRouter}>
        <Menu.Item key='project' icon={<PieChartOutlined />}>
          Project
        </Menu.Item>
        <Menu.Item key='dashboard' icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key='report' icon={<LineChartOutlined />}>
          Report
        </Menu.Item>
        <Menu.Item key='quota' icon={<ContainerOutlined />}>
          Quota
        </Menu.Item>
        <Menu.Item key='members' icon={<UserOutlined />}>
          Members
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

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
    <Sider width={180} collapsedWidth={100} collapsed={collapsed}>
      <Button
        type='primary'
        onClick={toggleMenu}
        style={{ display: 'flex', margin: '0', width: '180px' }}>
        {collapsed ? <MenuUnfoldOutlined style={{ fontSize: '20px'}} /> : <MenuFoldOutlined style={{ fontSize: '20px' }}/>}
      </Button>
      <Menu
        mode='inline'
        theme='dark'
        
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

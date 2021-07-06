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
    <Sider
      className='site-layout-background'
      trigger={null}
      width={200}
      collapsedWidth={80}
      collapsed={collapsed}
      style={{
        position: 'relative',
        height: 'auto',
        zIndex: '30'
      }}>
      <Button
        type='dashed'
        onClick={toggleMenu}
        style={{ display: 'flex', width: '60px', border: 'none' }}>
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: '20px' }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: '20px' }} />
        )}
      </Button>
      <Menu mode='inline' theme='dark' onClick={panelInfoRouter}>
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
        <Menu.Item key='users' icon={<UserOutlined />}>
          Users
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;

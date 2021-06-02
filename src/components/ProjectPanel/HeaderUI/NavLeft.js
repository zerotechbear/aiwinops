import { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const NavLeft = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Header, Sider, Content} = Layout;

  const toggleMenu = () => {
    setCollapsed(collapsed => !collapsed);
  }

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsed={collapsed}
        collapsible>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key='3' icon={<VideoCameraOutlined />}>
            Quota
          </Menu.Item>
          <Menu.Item key='4' icon={<VideoCameraOutlined />}>
            Members
          </Menu.Item>
          {/* Project.length !== 0 <Menu.Item key='5'> -> Report顯示內容*/}
        </Menu>
      </Sider>
    </Layout>
  );
  

};

export default NavLeft;

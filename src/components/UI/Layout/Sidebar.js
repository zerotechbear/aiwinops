import { useState, useContext } from 'react';
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

import AuthContext from '../../../store/auth-context';

const Sidebar = () => {
  const { Sider } = Layout;
  const { uid } = useParams();
  const history = useHistory();

  const authCtx = useContext(AuthContext);

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
        {authCtx.userInfo.level === 'owner' ? <Menu.Item key='dashboard' icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item> : null}
        {authCtx.userInfo.level === 'owner' ? <Menu.Item key='report' icon={<LineChartOutlined />}>
          Report
        </Menu.Item> : null}
        {authCtx.userInfo.level === 'owner' ? <Menu.Item key='quota' icon={<ContainerOutlined />}>
          Quota
        </Menu.Item> : null}
        {authCtx.userInfo.level === 'owner' ? <Menu.Item key='members' icon={<UserOutlined />}>
          Members
        </Menu.Item> : null}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

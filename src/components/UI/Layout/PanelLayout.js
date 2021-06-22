import { useContext } from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Header from './Header';
import Sidebar from './Sidebar';


import AuthContext from '../../../store/auth-context';

const PanelLayout = (props) => {
  const { Footer } = Layout;

  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Header />
      <Layout
        style={{
          position: 'fixed',
          width: '100%',
          height: '90%',
          top: '5rem',
        }}>
        {authCtx.userInfo.level === 'owner' ? <Sidebar /> : ''}
        <Layout style={{ backgroundColor: '#fff' }}>  
          {props.children}
          <Footer style={{  textAlign: 'center', padding: '10px', zIndex: '20' }}>Copyright @ 2021 AIWinOps. All Rights Reserved</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

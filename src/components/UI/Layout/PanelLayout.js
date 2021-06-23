import { useContext } from 'react';

import { Layout } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';

import AuthContext from '../../../store/auth-context';

const PanelLayout = (props) => {
  const { Content, Footer } = Layout;

  const authCtx = useContext(AuthContext);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout style={{ backgroundColor: '#fff', top: '5rem' }}>
        {authCtx.userInfo.level === 'owner' ? <Sidebar /> : ''}
        <Content style={{  margin: '20px 30px' }}>
          {props.children}
          <Footer
            style={{
              textAlign: 'center',
              padding: '30px 0',
              backgroundColor: '#fff',
            }}>
            Copyright @ 2021 AIWinOps. All Rights Reserved
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

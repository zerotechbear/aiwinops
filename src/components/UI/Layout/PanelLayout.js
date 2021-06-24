import { useContext } from 'react';

import { Layout, BackTop } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';

import AuthContext from '../../../store/auth-context';

const PanelLayout = (props) => {
  const { Content, Footer } = Layout;

  const authCtx = useContext(AuthContext);

  const backTopStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#434343',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  };

  const footerStyle = {
    textAlign: 'center',
    position: 'fixed',
    height: '2rem',
    left: '50px',
    width: '100%',
    bottom: '0',
    padding: '5px',
    backgroundColor: '#fafafa',
    color: '#000',
  };

  return (
    <Layout>
      <Header />
      <Layout style={{ top: '5rem' }}>
        {authCtx.userInfo.level === 'owner' ? <Sidebar /> : ''}
        <Layout style={{ overflowY: 'scroll', width: '100%' }}>
          <Content
            style={{
              height: '100vh',
              margin: '30px 50px',
              boxSizing: 'border-box',
            }}>
            {props.children}
            <BackTop visibilityHeight={10}>
              <div style={backTopStyle}>TOP</div>
            </BackTop>
          </Content>
          <Footer
            style={footerStyle}>
            Copyright @ 2021 AIWinOps. All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

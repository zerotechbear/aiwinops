// import { useContext } from 'react';

import { Layout } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';

// import AuthContext from '../../../store/auth-context';

const PanelLayout = (props) => {
  const { Content, Footer } = Layout;
  
  // const authCtx = useContext(AuthContext);

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
    zIndex: '20',
  };

  return (
    <Layout>
      <Header />
      <Layout style={{ top: '5rem' }}>
        {localStorage.getItem('level') === 'owner' ? <Sidebar /> : ''}
        <Layout style={{ width: '100%', height: '100vh', margin: '10px' }}>
          <Content
            style={{
              maxHeight: '100vh',
              boxSizing: 'border-box',
              margin: '10px',
              maxWidth: '95%'
            }}>
            {props.children}
          </Content>
          <Footer style={footerStyle}>
            Copyright @ 2021 AIWinOps. All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

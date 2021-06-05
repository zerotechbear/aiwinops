import { Layout } from 'antd';
import 'antd/dist/antd.css';

import Header from './Header';
import Sidebar from './Sidebar';

const PanelLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Layout style={{ position: 'fixed', width: '100%', top: '5rem' }}>
        <Sidebar />
        {props.children}
      </Layout>
    </Layout>
  );
};

export default PanelLayout;

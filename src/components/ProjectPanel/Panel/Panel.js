import { Layout } from 'antd';
import 'antd/dist/antd.css';

import NavHeader from './NavHeader';
import NavLeft from './NavLeft';

const Panel = () => {
  return (
    <Layout>
      <NavHeader />
      <NavLeft />
    </Layout>
  )
}

export default Panel;
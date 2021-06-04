import { Layout } from 'antd';

import 'antd/dist/antd.css';
import classes from '../../../styles/ProjectPanel/Panel/Panel.module.css';

import NavHeader from './NavHeader';
import NavLeft from './NavLeft';
import ProjectContent from '../Projects/ProjectContent';

const Panel = () => {
  return (
    <Layout>
      <NavHeader />
      <Layout className={classes.side__menu} style={{width: '100%'}}>
        <NavLeft />
        <ProjectContent />
      </Layout>
    </Layout>
  );
}

export default Panel;
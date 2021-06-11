import { useHistory, useRouteMatch } from 'react-router-dom';

import { Layout, Button } from 'antd';
import classes from '../../../styles/Panel/Projects/ProjectContent.module.css';

import MemberList from './MemberList';

const MemberContent = () => {
  const { Content } = Layout;
  const { url } = useRouteMatch();

  const history = useHistory();

  const newMemberHandler = () => {
    history.push(`${url}/new-member`);
  };

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Content style={{ margin: '0 30px' }}>
        <div className={classes.title}>
          <h3>Members</h3>
          <Button
            type='primary'
            style={{ fontWeight: '700' }}
            onClick={newMemberHandler}>
            +新成員
          </Button>
        </div>
        <MemberList />
      </Content>
    </Layout>
  );
};

export default MemberContent;

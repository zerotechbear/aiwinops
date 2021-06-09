import { useHistory } from 'react-router-dom';

import { Layout, Button } from 'antd';
import classes from '../../../styles/ProjectPanel/Projects/ProjectContent.module.css';

import MemberList from './MemberList';

const MemberContent = () => {
  const { Content } = Layout;

  const history = useHistory();

  const newMemberHandler = () => {
    history.push('/new-member');
  };

  return (
    <Layout style={{ backgroundColor: '#fff' }}>
      <Content style={{ margin: '0 50px' }}>
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

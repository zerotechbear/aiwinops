import { useHistory, useRouteMatch } from 'react-router-dom';

import { Button } from 'antd';

import classes from '../../../styles/Panel/Title.module.scss';

import MemberList from './MemberList';

const MemberContent = () => {
  const { url } = useRouteMatch();

  const history = useHistory();

  const newMemberHandler = () => {
    history.push(`${url}/new-member`);
  };

  return (
    <div>
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
    </div>
  );
};

export default MemberContent;

import { useHistory, useRouteMatch } from 'react-router-dom';

import { Button } from 'antd';
import classes from '../../../styles/Panel/Title.module.scss';

import UserList from './UserList';

const UserContent = () => {
  const { url } = useRouteMatch();
  const history = useHistory();

  const onNewUser = () => {
    history.push(`${url}/create`);
  };

  return (
    <div>
      <div className={classes.title}>
        <h3>成員</h3>
        <Button
          type='primary'
          style={{ fontWeight: '700' }}
          onClick={onNewUser}>
          +新成員
        </Button>
      </div>
      <UserList />
    </div>
  );
};

export default UserContent;

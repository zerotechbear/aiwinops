import { Fragment } from 'react';

import { Form, Input, Button, Layout} from 'antd';
import classes from '../../../styles/ProjectPanel/Member/NewMember.module.css';

import NavHeader from '../../UI/Layout/Header';
import Card from '../../UI/Layout/Card';

const NewMember = () => {

  return (
    <Layout>
      <NavHeader />
      <Card>
        <form class={classes.form}>
          <div className={classes.control}>
            <label htmlFor='title'>Post Title</label>
            <input type='text' id='title' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Post Title</label>
            <input type='text' id='title' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Post Title</label>
            <input type='text' id='title' required />
          </div>
        </form>
      </Card>
    </Layout>
  );
};

export default NewMember;
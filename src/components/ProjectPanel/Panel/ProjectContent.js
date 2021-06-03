import { Layout, Button, Table } from 'antd';

import classes from '../../../styles/ProjectPanel/Panel/ProjectContent.module.css';

const description = [
  {
    title: '專案名稱',
  },
  {
    title: '狀態'
  },
  {
    title: '管理者'
  },
  {
    title: '建立日期'
  },
  {
    title: '修改日期'
  },
  {
    title: '其他操作'
  }
]

const ProjectContent = () => {
  const { Content } = Layout;

  return (
    <Content className={classes.content}>
      <div className={classes.title}>
        <h3>Projects</h3>
        <Button type='primary'>+新專案</Button>
      </div>
      <div className={classes.projects}>
        <div>
          {<Table columns={description} />}
        </div>
      </div>
    </Content>
  );
};

export default ProjectContent;

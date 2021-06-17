import { Fragment } from 'react';
// import { useRouteMatch, useHistory } from 'react-router-dom';

import classes from '../../../styles/Panel/Projects/ProjectContent.module.css';
import { Layout, Cascader } from 'antd';

import ReportGraph from './ReportGraph';

const ReportContent = () => {
  const { Content } = Layout;

  // const { url } = useRouteMatch();

  // const history = useHistory();

  // 各專案名稱 -> 需傳入專案名
  const options = [
    {
      value: 'project1',
      label: 'Project1',
    },
    {
      value: 'project2',
      label: 'Project2',
    },
    {
      value: 'project3',
      label: 'Project3',
    },
  ];

  // 更改專案
  const chooseProject = (value) => {
    
  };

  return (
    <Fragment>
      <Content style={{ margin: '0 30px' }}>
        <div className={classes.title}>
          <h3>Report</h3>
        </div>
        <Cascader
          defaultValue={['project1']}
          options={options}
          onChange={chooseProject}
          allowClear={false}
          bordered={false}
          style={{ 
            border: '1px solid #000',
            margin: '5px 0'
          }}
        />
        <ReportGraph />
      </Content>
    </Fragment>
  );
};

export default ReportContent;

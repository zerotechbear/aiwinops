import classes from '../../../styles/Panel/Title.module.scss';

import { Cascader } from 'antd';

import ReportGraph from './ReportGraph';

const ReportContent = () => {
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
    // ...
  };

  return (
    <>
      <div className={classes.title}>
        <h3>Report</h3>
        <Cascader
          defaultValue={['project1']}
          options={options}
          onChange={chooseProject}
          allowClear={false}
          bordered={false}
          style={{
            border: '1px solid #999',
            margin: '5px 0',
          }}
        />
      </div>
      <ReportGraph />
    </>
  );
};

export default ReportContent;

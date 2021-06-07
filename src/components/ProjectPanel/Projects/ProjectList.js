import { useState, useEffect, useCallback } from 'react';
import { Table } from 'antd';

const TABLE_COLUMN = [
  {
    title: '專案名稱',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: '狀態',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: '管理者',
    key: 'manager',
    dataIndex: 'manager',
  },
  {
    title: '建立日期',
    key: 'build_time',
    dataIndex: 'build_time',
  },
  {
    title: '修改日期',
    key: 'modify_time',
    dataIndex: 'modify_time',
  },
  {
    title: '其他操作',
    key: 'action',
    dataIndex: 'action',
    type: 'Action',
  },
];

const ProjectList = (props) => {
  const [projectData, setProjectData] = useState();

  // TODO: 抓取使用者專案的資料 -> GET/ProjectData
  const fetchProjectData = useCallback(() => {
    fetch('https://aiwinops-default-rtdb.firebaseio.com/projects.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const storeData = [];
        for (const key in data) {
          storeData.push({
            key: key,
            name: data[key].name,
            status: data[key].status,
            manager: data[key].manager,
            build_time: data[key].build_time,
            modify_time: data[key].modify_time,
            editable: data[key].editable,
            modifiable: data[key].modifiable,
          });
        }
        setProjectData(storeData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  return (
    <div>
      <Table
        scroll={{ x: '1000', y: '500' }}
        pagination={false}
        columns={TABLE_COLUMN}
        dataSource={projectData}
      />
    </div>
  );
};

export default ProjectList;

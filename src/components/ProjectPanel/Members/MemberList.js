import { useState, useEffect, useCallback } from 'react';

import { Table } from 'antd';

import classes from '../../../styles/ProjectPanel/Member/MemberList.module.css';

const TEST_URL = 'https://aiwinops-default-rtdb.firebaseio.com/members.json';

const TABLE_COLUMN = [
  {
    title: '名稱',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: '權限',
    key: 'level',
    dataIndex: 'level'
  },
  {
    title: '狀態',
    key: 'status',
    dataIndex: 'status'
  }
];

const MemberList = () => {
  const [members, setMembers] = useState();

  const fetchMemberData = useCallback(() => {
    fetch(TEST_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const memberData = [];
        for (const key in data) {
          memberData.push({
            id: key,
            name: data[key].name,
            level: data[key].level,
            status: data[key].status,
          });
        }
        setMembers(memberData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchMemberData();
  }, [fetchMemberData]);

  return (
    <div className={classes.members}>
      <div>
        <Table columns={TABLE_COLUMN} dataSource={members} />
      </div>
    </div>
  );
};

export default MemberList;

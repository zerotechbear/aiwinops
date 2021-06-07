import { useState, useEffect, useCallback } from 'react';

import { Table } from 'antd';

import classes from '../../../styles/ProjectPanel/Member/MemberList.module.css';

// 目前使用 Firebase Realtime Database 模擬會員資料
const MEMBER_URL = 'https://aiwinops-default-rtdb.firebaseio.com/members.json';

// Firebase Authentication模擬GET會員API串接
// const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
// const MEMBER_LIST_API = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_KEY}`;

const TABLE_COLUMN = [
  {
    title: '名稱',
    key: 'name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: '權限',
    key: 'level',
    dataIndex: 'level',
    width: '20%',
  },
  {
    title: '信箱',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: '狀態',
    key: 'status',
    dataIndex: 'status',
  },
];

const MemberList = () => {
  const [members, setMembers] = useState();

  // TODO: 抓取會員的資料 -> GET/MemberData
  const fetchMemberData = useCallback(() => {
    fetch(MEMBER_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const memberData = [];
        for (const key in data) {
          memberData.push({
            key: key,
            id: data[key].name,
            name: data[key].username,
            level: data[key].level,
            status: data[key].status,
            email: data[key].email,
          });
        }
        setMembers(memberData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [setMembers]);

  useEffect(() => {
    fetchMemberData();

    return () => {
      fetchMemberData();
    }
  }, [fetchMemberData]);

  return (
    <div className={classes.members}>
      <div>
        <Table
          scroll={{ x: 1000, y: 500 }}
          pagination={false}
          columns={TABLE_COLUMN}
          dataSource={members}
        />
      </div>
    </div>
  );
};

export default MemberList;

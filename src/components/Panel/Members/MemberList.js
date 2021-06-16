import { useState, useEffect, useCallback } from 'react';

import { Table, Switch, Space } from 'antd';

import classes from '../../../styles/Panel/Member/MemberList.module.css';

// 目前使用 Firebase Realtime Database 模擬會員資料
const MEMBER_URL = 'https://aiwinops-default-rtdb.firebaseio.com/members.json';

// Firebase Authentication模擬GET會員API串接
// const FIREBASE_KEY = 'AIzaSyAaf6guV8zB9_4R5xwuDDiQM0zaNzQWuWA';
// const MEMBER_LIST_API = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_KEY}`;

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
            time: data[key].register_time,
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
  }, [members, fetchMemberData]);

  const TABLE_COLUMN = [
    {
      title: '名稱',
      key: 'name',
      dataIndex: 'name',
      width: '10%',
    },
    {
      title: '權限',
      key: 'level',
      dataIndex: 'level',
      width: '10%',
    },
    {
      title: '註冊時間',
      key: 'time',
      dataIndex: 'time',
      width: '20%',
    },
    {
      title: '信箱',
      key: 'email',
      dataIndex: 'email',
      render: (text) => {
        return <a>{text}</a>;
      },
    },
    {
      title: '狀態',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        // -> 更新資料庫會員的狀態
        const onToggle = (checked) => {
          status = checked;
        };
        return (
          <Space>
            <Switch defaultChecked onChange={onToggle} />
          </Space>
        );
      },
    },
  ];

  return (
    <div className={classes.members}>
      <div>
        <Table
          scroll={{ x: 1000, y: 400 }}
          pagination={false}
          columns={TABLE_COLUMN}
          dataSource={members}
        />
      </div>
    </div>
  );
};

export default MemberList;

import { useState, useEffect } from 'react';

import classes from "../../../styles/ProjectPanel/Member/MemberList.module.css";

import MemberItem from './MemberItem';

const TEST_URL = 'https://aiwinops-default-rtdb.firebaseio.com/members.json';

const MemberList = () => {
  const [members, setMembers] = useState([]);
 
  useEffect(() => {
    fetch(TEST_URL, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(data => {
      const memberData = [];
      for(const key in data){
        memberData.push({
          id: key,
          name: data[key].name
        })
      }
      setMembers(memberData);
    }).catch(error => {
      throw new Error(error);
    })
  }, [])

  return (
    <div className={classes.members}>
      <ul>
        {members.map((member) => (
          <li><MemberItem memberInfo={member}/></li>
        ))}
      </ul>
    </div>
  )
};

export default MemberList;
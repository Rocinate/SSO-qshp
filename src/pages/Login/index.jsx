import { useState } from 'react'

import Form from "./Form";
import UserList from "./UserList";
import SwipeableViews from "react-swipeable-views";
import { useQuery } from "react-query";

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [userList, setUserList] = useState([1, 2, 3]);

  const login = (data) => {
    console.log(data);
  };

  const chooseUser = (data) => {
    console.log(data);
  };

  return (
    <SwipeableViews index={progress} style={{ width: "400px" }}>
      <Form login={login} />
      <UserList data={userList} choose={chooseUser} />
    </SwipeableViews>
  );
};

export default Login
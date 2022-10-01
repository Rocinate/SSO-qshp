import { useState } from 'react'
import { authenticate, signIn} from '@/apis/login'

import Form from "./Form";
import UserList from "./UserList";
import SwipeableViews from "react-swipeable-views";
import { useQuery } from "react-query";

const Login = ({navigation}) => {
  const [progress, setProgress] = useState(0);
  const [userList, setUserList] = useState([1, 2, 3]);
  const [errorText, setErrorText] = useState("");

  const login = (data, token) => {
    // authenticate(data,75868)
    // signIn(data,43654)
    console.log(data)
  };

  const chooseUser = (data) => {
    console.log(data);
  };

  return (
    <SwipeableViews index={progress} style={{ width: "400px" }}>
      <Form login={login} errorText={errorText} setErrorText={setErrorText}/>
      <UserList data={userList} choose={chooseUser} />
    </SwipeableViews>
  );
};

export default Login
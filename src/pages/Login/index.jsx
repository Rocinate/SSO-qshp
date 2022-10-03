import { useState } from "react";
import { authenticate, signIn } from "@/apis/login";
import { useSearchParams } from "react-router-dom";

import Form from "./Form";
import UserList from "./UserList";
import SwipeableViews from "react-swipeable-views";
import { useQuery } from "react-query";

const Login = ({ navigation, setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [userList, setUserList] = useState([1, 2, 3]);
  const [errorText, setErrorText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()

  const login = (data, token) => {
    const params = Object.assign(data, {
      redirect: searchParams.get("redirect")
    })
    setLoading(true);
    authenticate(params, token).then(res => {
      if (res.errcode === 0) {
        setUserList(res.data.users)
        setProgress(1)
      }
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  };

  const chooseUser = (data) => {
    signIn(data).catch(err => {
      console.log(err)
    })
  };

  return (
    <SwipeableViews index={progress}>
      <Form login={login} errorText={errorText} setErrorText={setErrorText} />
      <UserList data={userList} choose={chooseUser} />
    </SwipeableViews>
  );
};

export default Login;

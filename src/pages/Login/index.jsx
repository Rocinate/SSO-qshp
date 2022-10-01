import { useState } from "react";
import { authenticate, signIn } from "@/apis/login";
import { motion } from "framer-motion";
import { pageMotion } from "@/utils/pageMotion";

import Form from "./Form";
import UserList from "./UserList";
import SwipeableViews from "react-swipeable-views";
import { useQuery } from "react-query";

const Login = ({ navigation, setLoading }) => {
  const [progress, setProgress] = useState(0);
  const [userList, setUserList] = useState([1, 2, 3]);
  const [errorText, setErrorText] = useState("");

  const login = (data, token) => {
    // authenticate(data,75868)
    // signIn(data,43654)
    setLoading(true);
    console.log(data);
  };

  const chooseUser = (data) => {
    console.log(data);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageMotion}
    >
      <SwipeableViews index={progress} style={{ width: "400px" }}>
        <Form login={login} errorText={errorText} setErrorText={setErrorText} />
        <UserList data={userList} choose={chooseUser} />
      </SwipeableViews>
    </motion.div>
  );
};

export default Login;

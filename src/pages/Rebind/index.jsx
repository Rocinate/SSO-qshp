import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Tab,
  Tabs,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Person, Https, Visibility, VisibilityOff } from "@mui/icons-material";

import ReCAPTCHA from "react-google-recaptcha";
import { useEffect } from "react";

const Register = (props) => {
  const { login } = props;

  const [tab, setTab] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);
  const { register, handleSubmit } = useForm();

  // const { isLoading, isSuccess, isError, data, error} = useQuery('login', login, )

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onTokenChange = (value) => {
    setToken(value);
  };

  useEffect(() => {
    window.recaptchaOptions = {
      useRecaptchaNet: true,
    };
  }, []);
  return (
    <Box style={{ width: "400px" }}>
      <div className="flex justify-center">
        <Box className="mb-4">
          <Typography gutterBottom variant="h3">
            清水河畔
          </Typography>
          <Typography className="float-right" gutterBottom>
            成电人的聚集地
          </Typography>
        </Box>
      </div>
      <Box className="overflow-hidden">
        <Box className="border-b border-b-slate-300">
          <Tabs value={tab} onChange={handleTabChange} centered>
            <Tab
              value="1"
              label={<Typography>换绑</Typography>}
              className="font-extrabold"
            />
          </Tabs>
        </Box>

        <form
          onSubmit={handleSubmit((data) =>
            login(Object.assign(data, { token: token }))
          )}
        >
          <div className="py-2 pt-8">
            <TextField
              fullWidth
              required
              label={tab == "1" ? "学号" : "用户名"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              {...register("user")}
            />
          </div>
          <div className="py-2">
            <TextField
              fullWidth
              required
              label="密码"
              type={showPassword ? "" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Https />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordClick} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
            />
          </div>
          <input
            type="submit"
            className="w-full my-2 py-3 text-white cursor-pointer"
            style={{ backgroundColor: "#1790fe", borderRadius: "4px" }}
            value="更 换"
          />
        </form>
      </Box>
    </Box>
  );
};

export default Register;

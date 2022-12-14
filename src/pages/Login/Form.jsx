import { useForm } from "react-hook-form";
import { useState } from "react";
import { LinkWithSearch } from "../Components/LinkWithSearch";
import LoadingButton from "@mui/lab/LoadingButton";
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

const Form = (props) => {
  const { login, errorText, setErrorText } = props;

  const [tab, setTab] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);
  const { register, handleSubmit } = useForm();

  const site_key = import.meta.env.PROD
    ? import.meta.env.VITE_RECAPTCHA_KEY_PRODUCTION
    : import.meta.env.VITE_RECAPTCHA_KEY;

  const handleTabChange = (event, value) => {
    setTab(value);
  };

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onTokenChange = (value) => {
    setToken(value);
    setErrorText("");
  };

  const handleLogin = (data) => {
    if (token == null) {
      setErrorText("请先进行人机身份认证");
      return;
    }
    login(
      Object.assign(data, {
        type: tab,
        app_id: 1
      }),
      token
    );
  };

  return (
    <>
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
        {/* <Box className="p-11 bg-white shadow-md" style={{ width: "440px" }}> */}
        <Box className="border-b border-b-slate-300">
          <Tabs value={tab} onChange={handleTabChange} centered>
            <Tab
              value={1}
              label={<Typography>统一身份认证</Typography>}
              className="font-extrabold"
            />
            <Tab
              value={2}
              label={<Typography>账号密码登录</Typography>}
              className="font-extrabold"
            />
          </Tabs>
        </Box>

        <form onSubmit={handleSubmit((data) => handleLogin(data))}>
          <div className="py-2 pt-8">
            <TextField
              fullWidth
              label={tab == "1" ? "学号" : "用户名"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              {...register("user", { required: true })}
            />
          </div>
          <div className="py-2 pb-4">
            <TextField
              fullWidth
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
              {...register("password", { required: true })}
            />
          </div>
          <div style={{ height: "102px" }}>
            <div
              style={{
                transform: "scale(1.3157)",
                transformOrigin: "0 0",
              }}
            >
              <ReCAPTCHA sitekey={site_key} onChange={onTokenChange} />
            </div>
          </div>
          <Typography className="text-red-500">{errorText}</Typography>
          <div className="flex justify-between pt-2 pb-4">
            <Typography className="my-8 cursor-pointer">
              <span style={{ color: "#1790fe" }}>
                <LinkWithSearch to="/register">注册</LinkWithSearch>
              </span>{" "}
              /{" "}
              <span style={{ color: "#1790fe" }}>
                <LinkWithSearch to="/rebind">毕业生换绑</LinkWithSearch>
              </span>
            </Typography>
            <Typography
              className="my-8 cursor-pointer"
              style={{ color: "#1790fe" }}
            >
              <LinkWithSearch to="/reset">忘记密码 ?</LinkWithSearch>
            </Typography>
          </div>
          <LoadingButton
            // loading={isLoading}
            loading={false}
            type="submit"
            size="large"
            variant="contained"
            className="w-full cursor-pointer"
            style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
          >
            登 录
          </LoadingButton>
          {/* <input
            type="submit"

            className="w-full my-2 py-3 text-white cursor-pointer"
            style={{ backgroundColor: "#1790fe", borderRadius: "4px" }}
            value="登  录"
          /> */}
        </form>
      </Box>
    </>
  );
};

export default Form;

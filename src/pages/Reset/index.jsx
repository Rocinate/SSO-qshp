import { useForm } from "react-hook-form";
import { useState } from "react";
import { LinkWithSearch } from "../Components/LinkWithSearch";
import { portal } from "@/apis/reset";
import {
  Box,
  Typography,
  TextField,
  Tab,
  Tabs,
  IconButton,
  InputAdornment,
  Checkbox,
} from "@mui/material";
import {
  Person,
  Https,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import ReCAPTCHA from "react-google-recaptcha";

const Reset = ({ setLoading, loading }) => {
  const [tab, setTab] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(null);
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit } = useForm();
  const [errorText, setErrorText] = useState("");

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
  };

  const handleRegister = (data) => {
    if (token == null) {
      setErrorText("请先进行人机身份认证");
      return;
    }
    setLoading(true);
    portal(data, token).then((res) => {
      if (res.errcode === 0) {
        setUserList(res.data.users);
      }
      setLoading(false);
    });
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
              value="1"
              label={<Typography>统一身份认证注册</Typography>}
              className="font-extrabold"
            />
          </Tabs>
        </Box>

        <form onSubmit={handleSubmit((data) => handleRegister(data))}>
          <div className="py-2 pt-8">
            <TextField
              fullWidth
              label="学号"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              {...register("student_id", { required: true })}
            />
          </div>
          <div className="py-2">
            <TextField
              fullWidth
              label="统一身份认证密码"
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
              {...register("student_password", { required: true })}
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
              {...register("new_password", { required: true })}
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
          <Typography className="my-8 ">
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            ></Checkbox>
            我已阅读并同意
            <span className="cursor-pointer" style={{ color: "#1790fe" }}>
              《清水河畔用户注册协议》
            </span>
          </Typography>
          <Typography className="text-red-500">{errorText}</Typography>
          <div className="flex justify-between">
            <Typography
              className="my-8 cursor-pointer"
              style={{ color: "#1790fe" }}
            >
              <LinkWithSearch to="/rebind">毕业生换绑</LinkWithSearch>
            </Typography>
            <Typography
              className="my-8 cursor-pointer"
              style={{ color: "#1790fe" }}
            >
              <LinkWithSearch to="/">已有帐号？</LinkWithSearch>
            </Typography>
          </div>
          <input
            type="submit"
            className="w-full my-2 py-3 text-white cursor-pointer"
            style={{ backgroundColor: "#1790fe", borderRadius: "4px" }}
            value="注  册"
          />
        </form>
      </Box>
    </>
  );
};

export default Reset;

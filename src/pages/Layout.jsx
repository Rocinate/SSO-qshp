import { LinearProgress } from "@mui/material";
import { useState } from "react";
import bgImg from "@/assets/login-bg1.jpg";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from '@/route'

const Clause = () => {
  return (
    <div
      className="absolute bottom-1 right-1 flex text-white"
      style={{ fontSize: "14px" }}
    >
      <p className="mx-2">使用条款</p>
      <p className="mx-2">隐私和cookie</p>
    </div>
  );
};

const Layout = () => {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex h-full">
      <div className="w-3/4">
        <div
          className="bg-cover absolute w-full h-full"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
      </div>
      <div className="flex items-center justify-center flex-col float-right flex-1 relative px-40">
        <div className="w-full h-full absolute bg-opacity-10 bg-black">
          <div className="w-full h-full blur-sm bg-opacity-10 bg-black"></div>
        </div>

        <div style={{ borderRadius: "4px" }} className="overflow-hidden">
          {loading ? <LinearProgress /> : <></>}
          <div className="relative z-10 bg-white p-11 box-border transition-all">
            <Routes>
              {routes.map(({ path, component: Component }) => (
                <Route path={path} element={<Component />} key={path} />
              ))}
            </Routes>
          </div>
        </div>
        <Clause />
      </div>
    </div>
  );
};

export default Layout;

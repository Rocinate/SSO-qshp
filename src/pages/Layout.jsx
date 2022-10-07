import { LinearProgress, Fade, Box } from "@mui/material";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "@/route";

import bgImg from "@/assets/login-bg.jpg";
import Privacy from '@/pages/Clause/Privacy'
import Terms from '@/pages/Clause/Terms'

const Clause = () => {
  const [privacyShow, setPrivacyShow] = useState(false)
  const [termsShow, setTermsShow] = useState(false)

  return (
    <div
    className="absolute bottom-1 right-1 flex text-white"
    style={{ fontSize: "14px" }}
    >
      <Privacy show={privacyShow} setShow={setPrivacyShow} />
      <Terms show={termsShow} setShow={setTermsShow} />
      <p className="mx-2 cursor-pointer" onClick={() => setTermsShow(true)}>使用条款</p>
      <p className="mx-2 cursor-pointer" onClick={() => setPrivacyShow(true)}>隐私和cookie</p>
    </div>
  );
};

const TransitionWrapper = ({ children }) => {
  return (
    <Fade in={true}>
      <Box style={{width: '400px'}}>{children}</Box>
    </Fade>
  );
};

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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
            <Routes location={location} key={location.pathname}>
              {routes.map(({ path, component: Component }) => (
                <Route
                  path={path}
                  element={
                    <TransitionWrapper>
                      <Component setLoading={setLoading} loading={loading} />
                    </TransitionWrapper>
                  }
                  key={path}
                />
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

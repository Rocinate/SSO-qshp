import Register from '@/pages/Register'
import Login from "@/pages/Login";
import Rebind from "@/pages/Rebind"

const routes = [
    {
      path: '/',
      component: Login
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/rebind",
      component: Rebind
    }
  ];

export default routes;
import Register from '@/pages/Register'
import Login from "@/pages/Login";
import Reset from "@/pages/Reset"
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
    },
    {
      path: '/reset',
      component: Reset
    }
  ];

export default routes;
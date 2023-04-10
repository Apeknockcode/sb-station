import Login from "@/views/login/login"
import buildStation from "@/views/buildStation/index"

const routesConfig = [
  {
    path: '/',
    component: 'Login'
    },
   {
    path: '/bs',
    component: 'buildStation'
  },
]

export default routesConfig
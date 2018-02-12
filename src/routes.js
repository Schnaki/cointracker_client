import Signin from './components/user/Signin.vue'
import Signup from './components/user/Signup.vue'
import Dashboard from './components/dashboard/Dashboard.vue'

export const routes = [
  { path: '', component: Dashboard },
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
]

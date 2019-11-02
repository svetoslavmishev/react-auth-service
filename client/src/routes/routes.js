import { Home, SignIn, SignUp } from '../components/index';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/auth/signin',
    component: SignIn
  },
  {
    path: '/auth/signup',
    component: SignUp
  },
  {
    path: '*',
    component: Home
  }
];

export default routes;

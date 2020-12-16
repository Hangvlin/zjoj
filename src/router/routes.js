const Home = () => import("views/home/Home");
const Rank = () => import('views/rank/Rank');
const Competition = () => import('views/competition/Competition');
const Login = () => import('views/login/Login');
const Questions = () => import('views/questions/Questions');
const Register = () => import('views/register/Register');
const State = () => import('views/state/State');
const Detail = () => import('views/detail/Detail');
const CmpDetail = () => import('views/cmpdetail/CmpDetail');

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/rank",
    component: Rank,
  },
  {
    path: "/competition",
    component: Competition,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/questions",
    component: Questions,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/state",
    component: State,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/cmpdetail/:id",
    component: CmpDetail,
  }

];

export default routes;
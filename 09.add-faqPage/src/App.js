import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Counter from './components/Counter';
import Auth from './components/Auth';

import Login from './pages/Login';
import Main from './pages/Main';
import GridTest from './pages/GridTest';
import Faq from './pages/Faq';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <Main /> },
  { path: '/counter', element: <Counter /> },
  { path: '/auth', element: <Auth /> },
  { path: '/grid', element: <GridTest /> },
  { path: '/faq', element: <Faq /> },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

// const isAuth = useSelector(state => state.auth.isAuthenticated);
// return (
//   <Fragment>
//     <Header />
//     { !isAuth && <Auth /> }
//     { isAuth && <UserProfile /> }
//     <Counter />
//   </Fragment>

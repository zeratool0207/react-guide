import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Counter from './components/Counter';
import Auth from './components/Auth';

import Login from './pages/Login';
import Main from './pages/Main';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <Main /> },
  { path: '/counter', element: <Counter /> },
  { path: '/auth', element: <Auth /> },
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

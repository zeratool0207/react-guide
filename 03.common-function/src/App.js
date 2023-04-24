import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <Main /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

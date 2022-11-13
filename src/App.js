import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Login></Login>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/booking',
        element: <Booking></Booking>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;

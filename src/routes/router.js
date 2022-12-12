import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import { AddList } from '../components/AddList';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      {
        path: 'my-list',
        element: <AddList />,
      },
    ],
  },
]);

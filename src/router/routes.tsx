import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
];

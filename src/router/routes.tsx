import { RouteObject } from 'react-router-dom';
import ApartmentPage from '../pages/ApartmentPage';
import ApartmentsListingsPage from '../pages/ApartmentsListingsPage';
import HomePage from '../pages/HomePage';
import Page404 from '../pages/Page404';

export const routes: RouteObject[] = [
  {
    id: 'home-page',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'apartment-listings-page',
    path: '/listings',
    element: <ApartmentsListingsPage />,
  },
  {
    id: 'apartment-page',
    path: '/apartments/:id',
    element: <ApartmentPage />,
  },
  {
    id: '404-page',
    path: '*',
    element: <Page404 />,
  },
];

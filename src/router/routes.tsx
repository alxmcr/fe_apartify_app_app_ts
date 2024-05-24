import { RouteObject } from 'react-router-dom';
import ApartmentPage from '../pages/ApartmentPage';
import ApartmentsListingsPage from '../pages/ApartmentsListingsPage';
import HomePage from '../pages/HomePage';

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
];

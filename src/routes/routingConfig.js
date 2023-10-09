import { createBrowserRouter } from 'react-router-dom';

import FavoritePage from '@containers/FavoritePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';

import HomePage from '@containers/HomePage';
import Navigation from '@components/Navigation';
import NotFoundPage from '@containers/NotFoundPage';
import SearchPage from '@containers/SearchPage';
import ErrorMessage from '@components/ErrorMessage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigation />,
        index:true,
        errorElement: <NotFoundPage />,     
        children: [
            {
                path: '/',
                element: <HomePage />,
                // index: true
            },
            {
                path: '/people/*',
                element: <PeoplePage />,
            },
            {
                path: '/favorites/',
                element: <FavoritePage />,
            },
            {
                path: '/search',
                element: <SearchPage/>,
            },
            {
                path: '/fail',
                element: <ErrorMessage/>,
            },
            {
                path: '/people/:id',
                element: <PersonPage />,
            },
            {
                path: "/not-found",
                element: <NotFoundPage />,
            },
        ]
    },

])
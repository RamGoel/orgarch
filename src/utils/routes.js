import Role from '../pages/Role';
import Login from '../pages/Login';
import { createBrowserRouter } from 'react-router-dom';
import ReviewerSignup from '../pages/ReviewerSignup';
import OrganizerSignup from '../pages/OrganizerSignup';
import OrganizerHome from '../pages/OrganizerHome';
import ReviewerHome from '../pages/ReviewerHome';

export const Router = createBrowserRouter([
    {
        element: <Role />,
        path: '/',
    },
    {
        element: <Login />,
        path: '/login/:role'
    },
    {
        element: <ReviewerSignup />,
        path: '/reviewer/signup'
    },
    {
        element: <OrganizerSignup />,
        path: '/organizer/signup'
    },
    {
        element: <OrganizerHome />,
        path: '/organizer/home'
    },
    {
        element: <ReviewerHome />,
        path: '/reviewer/home'
    },

])
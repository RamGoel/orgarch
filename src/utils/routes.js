import Role from '../pages/auth/Role';
import Login from '../pages/auth/Login';
import { createBrowserRouter } from 'react-router-dom';
import ReviewerSignup from '../pages/auth/ReviewerSignup';
import OrganizerSignup from '../pages/auth/OrganizerSignup';
import OrganizerHome from '../pages/organizer/OrganizerHome';
import ReviewerHome from '../pages/reviewer/ReviewerHome';
import ResearchPaperPage from '../pages/reviewer/ResearchPaperPage';
import NewConference from '../pages/organizer/NewConference';

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
    {
        element: <ResearchPaperPage />,
        path: '/reviewer/page'
    },
    {
        element: <NewConference />,
        path: '/organizer/addconference'
    },

])
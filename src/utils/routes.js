import Role from '../pages/auth/Role';
import Login from '../pages/auth/Login';
import { createBrowserRouter } from 'react-router-dom';
import ReviewerSignup from '../pages/auth/ReviewerSignup';
import OrganizerSignup from '../pages/auth/OrganizerSignup';
import OrganizerHome from '../pages/organizer/OrganizerHome';
import ReviewerHome from '../pages/reviewer/ReviewerHome';
import NewConference from '../pages/organizer/NewConference';
import ConferencePage from '../pages/organizer/ConferencePage';
import SubmitPapers from '../pages/organizer/SubmitPapers';
import AllConferences from '../pages/reviewer/AllConferences';
import ConferencePapers from '../pages/organizer/ConferencePapers';
import AddReview from '../pages/reviewer/AddReview';
import ConferenceReviews from '../pages/reviewer/ConferenceReviews';
export const Router = createBrowserRouter([
    {
        element: <Role />,
        path: '/',
    },
    {
        element: <Login />,
        path: '/login'
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
        element: <NewConference />,
        path: '/organizer/addconference'
    },
    {
        element: <ConferencePage />,
        path: '/conference/:id'
    },
    {
        element: <SubmitPapers />,
        path: '/conference/:id/submit'
    },
    {
        element: <ConferencePapers />,
        path: '/conference/:id/papers'
    },
    {
        element: <AllConferences />,
        path: '/conferences'
    },
    {
        element: <AddReview />,
        path: '/conference/:id/paper/:id/addreview'
    },
    {
        element: <ConferenceReviews />,
        path: '/conference/:id/paper/:id/reviews'
    },

])
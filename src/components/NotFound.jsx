import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>We're sorry, but the page you are looking for does not exist.</p>
      <p>Please check the URL or go back to the <Link to="/">homepage</Link>.</p>
      <style jsx>{`
        .not-found-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        h1 {
          font-size: 8rem;
          color: #f44336;
          margin-bottom: 1rem;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .error-image {
          width: 20rem;
          margin-bottom: 2rem;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        a {
          color: #1976d2;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;

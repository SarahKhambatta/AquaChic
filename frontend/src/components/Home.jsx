import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Welcome to AuraThreads!</h2>
            <p>This is the home page.</p>
            <Link to="/login">Login to your account</Link> {/* Add link to login page */}
        </div>
    );
};

export default Home;

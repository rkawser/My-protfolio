import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>page not Found</h2>
            <Link to='/home'>
            <button className='btn btn-danger'>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container mt-5'>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque praesentium nisi voluptates magnam explicabo voluptate cum, incidunt cumque, dolor a rerum dolorum laborum odio delectus ab quis rem! Laborum, dicta!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
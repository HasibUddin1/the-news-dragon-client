import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const TermsAndConditions = () => {
    useTitle('Terms and Conditions')
    return (
        <div className='container'>
            <h2>Our Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aspernatur reprehenderit deleniti ullam voluptatem sequi adipisci fugit dolorum ipsam. Consectetur quis in incidunt ullam architecto, laudantium sapiente dolorum nisi laboriosam rem unde nostrum temporibus odio ex ipsam vel voluptate aut illo corrupti cupiditate quos. Exercitationem quisquam praesentium quis in tenetur.</p>
            <p>Go Back <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;
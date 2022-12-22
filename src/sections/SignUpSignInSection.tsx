import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpSignInSection: React.FC = () => {
    return (
        <section className="__sign-section">
            <div className="container">
                <ul className='sign-list'>
                    <li>
                        <i className="fa-regular fa-user"></i><NavLink to="/signup">Sign up</NavLink>
                    </li>
                    <li><i className="fa-regular fa-arrow-right-to-bracket"></i><NavLink to="/signin">Sign In</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SignUpSignInSection
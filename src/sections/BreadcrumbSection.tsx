import React from 'react';
import { NavLink } from 'react-router-dom'

interface IBreadcrumbProps {
    currentPage: string
    parentPage?: string
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ currentPage, parentPage }) => {

    return (
        <section className="__breadcrumb-section">
            <div className="container">
                <ul className='breadcrumb-list'>
                    <li>
                        <i className="fa-sharp fa-solid fa-house"></i><NavLink to="/">Home</NavLink>

                        {
                            (parentPage != undefined) ? <NavLink to={`/${parentPage}`}>{parentPage}</NavLink> : ""
                        }

                    </li>
                    <li>{currentPage}</li>
                </ul>
            </div>
        </section>
    )
}
export default Breadcrumb
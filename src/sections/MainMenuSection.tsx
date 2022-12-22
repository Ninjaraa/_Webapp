import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../components/MenuIcon';
import { useShoppingCartContext, ShoppingCartType } from '../contexts/ShoppingCartContext'

interface IMainMenu {
    link?: any;
    icon?: any;
    hideOnMobile?: any
    quantity?: number
}

const MainMenuSection: React.FC<IMainMenu> = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const { cartQuantity } = useShoppingCartContext() as ShoppingCartType

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="mainmenu container">
            <NavLink to='/' className='logo'>Fixxo.</NavLink>
            <div className={`menu-links ${showMenu ? "d-grid" : ""}`}>
                <NavLink to='/' className='menu-link'>Home</NavLink>                
                <NavLink to='/products' className='menu-link'>Products</NavLink>
                <NavLink to='/allproducts' className='menu-link'>All Products</NavLink>
                <NavLink to='/categories' className='menu-link'>Edit Products</NavLink>
                <NavLink to='/contacts' className='menu-link'>Contacts</NavLink>
            </div>
            <div className="menu-icons">
                <MenuIcon link="/" icon="fa-regular fa-magnifying-glass" />
                <MenuIcon hideOnMobile={true} link="/" icon="fa-regular fa-code-compare fa-flip-horizontal" />
                <MenuIcon hideOnMobile={true} quantity={cartQuantity} link="/" icon="fa-regular fa-heart" />
                <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCartLabel">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                    <i className="fa-regular fa-bag-shopping"></i>
                </button>
                <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
            </div>
        </nav>
    )
}

export default MainMenuSection
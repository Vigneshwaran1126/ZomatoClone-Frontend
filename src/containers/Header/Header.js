import React from 'react';
import './Header.css';
import Button from '../../components/Button/Button';
import Logo from '../../components/Images/logo.png';

function Header() {
    return (
        <header className='header_container'>
            <nav className='navbar'>
                <div>
                <img src={Logo} tabIndex="0" className='logo_image' alt='zomato'/>
                </div>
                <ul role="menuitem" aria-label="navbar" aria-expanded='false' height="8033.75px" className="navigation_bar">
                <li className="navbar_list">
                    <div tabIndex="-1" className="inputbar_layout">
                      <div className="inputbar_border">
                        <div className="location_container">
                        <i className="location_icon" color="#F57082" size="20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F57082" width="20" height="20" 
                        viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="svg_location"><title>location-fill</title>
                        <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3z
                        M10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg></i>
                        <input type="search" placeholder="Mumbai" className="placeholder_box"/>
                        <i className="dropdown_icon" color="4F4F4F" size="12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="12" height="12" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-"
                         role="img" className="svgdropdown_icon"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg>
                        </i>
                        </div>
                        <div className="box_seperator"></div>
                        <div className="searchbox_container">
                         <div className="searchicon_box">
                            <i className="searchicon" color="828282" size="18">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" className="svg_searchicon"><title>Search</title><path 
                            d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 
                            4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 
                            7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
                            </i>
                         </div>
                         <input type="search" placeholder="Search for restaurant, cuisine or a dish" className="search_placeholder" />
                        </div>
                      </div>
                    </div>
                </li>
                <li className="navbar_list">
                    <Button buttonStyle="btn--white--outline" buttonSize="btn--medium" name="Log in"/>
                </li>
                <li className="navbar_list">
                    <Button buttonStyle="btn--white--outline" buttonSize="btn--medium" name="Sign up" />
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

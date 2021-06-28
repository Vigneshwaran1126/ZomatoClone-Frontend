import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Category from '../Categories/index';
import FilterContent from '../FilterContent/index';
import Card from '../Card/Card';

function HomePage() {
    return (
        <div className='body_container'>
            <div className='header_below'>
                <Header/>
            </div>
            <Category/>
            <FilterContent/>
            <Card/>
            <Footer/>
        </div>
    )
}

export default HomePage;

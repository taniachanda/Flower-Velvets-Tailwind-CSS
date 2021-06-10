import React from 'react';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Products from '../TopProducts/Products';
import Testimony from '../Testimony/Testimony';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <Products/>
            <Testimony/>
            <Footer/>
        </div>
    );
};

export default Home;
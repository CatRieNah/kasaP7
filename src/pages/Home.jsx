import React from 'react';
import Banner from '../components/Banner';
import bannerImage from "../assets/banner/bannerHome.png"
const Home = () => {
    return (
        <>
            <Banner title="Chez vous,partout et ailleur" imageUrl={bannerImage}/>
        </>
    );
};

export default Home;
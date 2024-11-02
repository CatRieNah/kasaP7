import React from 'react';
import Banner from '../components/Banner';
import bannerImage from "../assets/banner/bannerHome.png"
import ApartmentCard from '../components/ApartmentCard';
const Home = () => {
    return (
        <>
            <Banner title="Chez vous, partout et ailleur" imageUrl={bannerImage}/>
            <ApartmentCard />
        </>
    );
};

export default Home;
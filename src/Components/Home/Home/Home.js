import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import ExampleCard from '../ExampleCard/ExampleCard';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <Services/>
            <ExampleCard/>
            <ShowReview/>
            <Footer/>
        </div>
    );
};

export default Home;
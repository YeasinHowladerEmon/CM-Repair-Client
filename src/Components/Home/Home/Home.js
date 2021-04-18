import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import BusinessInfo from '../BusinessInfo/BusinessInfo'
import ExampleCard from '../ExampleCard/ExampleCard';
import ShowReview from '../ShowReview/ShowReview';
import ExampleCard2 from '../ExampleCard2/ExampleCard2';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <Services/>
            <ExampleCard/>
            <ExampleCard2/>
            <ShowReview/>
            <Footer/>
        </div>
    );
};

export default Home;
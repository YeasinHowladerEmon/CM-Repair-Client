import React, { useEffect, useState } from 'react';
import iphone from '../../../images/anton-maksimov-juvnsky-R2ljPFJju1s-unsplash.jpg'
import ipad from '../../../images/nikolai-chernichenko-eqojpEtCkNI-unsplash.jpg'
import laptop from '../../../images/man-repairing-circuit-board-laptop.jpg'
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://cryptic-waters-52200.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
        
    }, [])
    return (
        <section style={{marginTop: '400px'}} className="services-container">
            <div className="text-center">
                <h4 style={{color: 'orange'}}>OUR SERVICES</h4>
                <h2>Services We Provide</h2>
            </div>
            <div  id="cards_landscape_wrap-2" style={{margin: '100px'}} className=" d-flex justify-content-center">
                    <div className="w-75 row">
                        {
                            serviceData.map(services => <ServiceDetails key={services._id} services={services}/>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default Services;
import React from 'react';
import { Container } from 'react-bootstrap';
import './ExampleCard';
import mobile from '../../../images/a2.1.jpg'
import mobile1 from '../../../images/a2.2.jpg'

const ExampleCard = () => {
    return (
            <section className=" pb-0 pb-md-5 my-5">
                <Container>
                    <div className="row mb-5">
                        <div className="col-md-4 mb-4 m-md-0">
                            <img src={mobile} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center ms-5 ">
                            <h1 className="mb-5">WELCOME TO MOBILE REPAIR</h1>
                            <p className="text-secondary mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nulla beatae dolores consequuntur quo adipisci ipsa omnis quos nihil expedita praesentium, magni reprehenderit, ducimus sequi numquam, hic id quod! Impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus molestiae ab similique aut non saepe soluta sunt libero sapiente, inventore quod et hic consectetur quidem cumque, alias necessitatibus architecto.</p>
                            <button className="btn btn-primary text-white">Learn More</button>
                        </div>
                    </div>
                </Container>
            </section>
        
    );
};

export default ExampleCard;
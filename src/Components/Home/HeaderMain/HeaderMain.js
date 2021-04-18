import React from 'react';
import { Card } from 'react-bootstrap';
import './headerMain.css'

const HeaderMain = () => {
    return (
        <div style={{height: '600px'}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="block text-white">
                            <h3 className="mb-15">Mobile $ Computer</h3>
                            <h2 className="display-3 mb-15 ">Repiar Services</h2>
                            <p className="lead mt-25 mb-35">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore illo expedita sequi ea ut, reiciendis esse nemo sint quis est. Reprehenderit mollitia commodi temporibus distinctio sit nemo exercitationem id.</p>
                            <a className="btn btn-primary mt-10 me-5 ms-md-4" href="http://">Appointment</a>
                            <a className="btn btn-primary mt-10" href="http://">Get a Qoute</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;

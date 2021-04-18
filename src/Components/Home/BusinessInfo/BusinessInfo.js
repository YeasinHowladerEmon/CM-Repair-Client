import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faWrench, faHeadset, faRocket } from '@fortawesome/free-solid-svg-icons'
import keyboard from '../../../images/stock-photo-modern-computer-keyboard-and-medical-stethoscope-conceptual-image-1723189219.jpg'
import customer from '../../../images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg'
import professional from '../../../images/123720570-technician-repairing-mobile-phone-at-table-closeup.jpg'
const infosData = [
    {
        title: "FREE DIAGNOSTICS.",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore illo expedita sequi ea ut, reiciendis esse nemo sint quis est.",
        icon: faWrench,
        background: 'primary',
        img: keyboard
    },
    {
        title: "ONLINE HELP.",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore illo expedita sequi ea ut, reiciendis esse nemo sint quis est.",
        icon: faHeadset,
        background: 'dark',
        img: customer
    },
    {
        title: "PROFESSIONAL REPAIR",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, labore illo expedita sequi ea ut, reiciendis esse nemo sint quis est.",
        icon: faRocket,
        background: 'primary',
        img: professional
    }
]

const BusinessInfo = () => {
    return (
        <section style={{marginTop: '200px'}}>
           <div>  <h1 className="text-center mt-5 mb-5" style={{color:"black"}}>Our Fretures</h1></div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row align-items-center">
                    {
                        infosData.map(info => <InfoCard info={info}/>)
                    }
                </div>
          </div>
        </section>
    );
};

export default BusinessInfo;
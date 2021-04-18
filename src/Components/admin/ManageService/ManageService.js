import React, { useEffect, useState } from 'react';
import ManageServices from '../../ManageServices/ManageServices';

const ManageService = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://cryptic-waters-52200.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])
    return (
        <div>
            <ManageServices dataManage={serviceData} />
        </div>
    );
};

export default ManageService;
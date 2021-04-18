
import React from 'react';
import { Link } from 'react-router-dom';

const ManageServices = ({dataManage}) => {
    // console.log({dataManage});
    const deleteService = (id) =>{
        console.log(id)
        fetch(`https://cryptic-waters-52200.herokuapp.com/deleteService/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete');
        })
    }
    return (
        <div>
              <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Service Name</th>
                <th className="text-secondary" scope="col">Description</th>
                <th className="text-secondary" scope="col">Amount</th>
                <th className="text-secondary" scope="col">Action</th>
                
                </tr>
            </thead>
            <tbody>
                {
                  dataManage.map((serviceData, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{serviceData.title}</td>
                        <td>{serviceData.description}</td>
                        <td>{serviceData.amount}</td>
                        <td><button className="btn btn-primary" onClick={() => deleteService(serviceData._id)}>Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default ManageServices;
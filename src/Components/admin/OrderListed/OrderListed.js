import React from 'react';

const OrderListed = ({bookList}) => {
    return (
        <div>
        <table className="table table-borderless">
      <thead>
          <tr>
          <th className="text-secondary text-left" scope="col">Sr No</th>
          <th className="text-secondary" scope="col">Name</th>
          <th className="text-secondary" scope="col">Email</th>
          <th className="text-secondary" scope="col">Service Name</th>
          <th className="text-secondary" scope="col">Amount</th>
          </tr>
      </thead>
      <tbody>
          {
            bookList.map((bookList, index) => 
                  
              <tr>
                  <td>{index + 1}</td>
                  <td>{bookList.name}</td>
                  <td>{bookList.email}</td>
                  <td>{bookList.serviceId.title}</td>
                  <td>{bookList.serviceId.amount}</td>
              </tr>
              )
          }
      </tbody>
  </table>
  </div>
    );
};

export default OrderListed;
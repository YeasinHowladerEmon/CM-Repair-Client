import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Booking from '../Booking/Booking';
import BookList from '../BookList/BookList';
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Admin'
import AddService from '../AddService/AddService';
import Footer from '../../Shared/Footer/Footer';
import { UserContext } from '../../../App';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
    let { path, url } = useRouteMatch();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [isAdmin, setIsAdmin] = useState(false)

    // useEffect(() =>{
    //     fetch('http://localhost:5000/isAdmin', {
    //         method: 'POST',
    //         headers: {'content-type': 'application.json'},
    //         body: JSON.stringify(loggedInUser.email)
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [loggedInUser.email])
    return (
       <>
    <div>
      <div className='row'>
            <div className="col-lg-4 col-xs-12 col-md-4 ">
            <Link className="list-unstyled" to="/"><h2>admin</h2></Link>
            <div className='sidebar d-flex justify-content-between py-5 '>
                <ul className="list-unstyled">
                    <li>
                        <Link to='/'> <FontAwesomeIcon icon={faGripHorizontal} /> <span>home</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/serviceId/:id`}><FontAwesomeIcon icon={faCalendar} /><span>book</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/bookList`}> <FontAwesomeIcon icon={faUsers} /><span>bookList</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/review`}>  <FontAwesomeIcon icon={faFileAlt} /><span>review</span></Link>
                    </li>
                  
                    <li>
                        <Link to={`${url}/orderList`}>  <FontAwesomeIcon icon={faFileAlt} /><span>Customar Order List</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/addService`}>  <FontAwesomeIcon icon={faFileAlt} /><span>Add Service</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/makeAdmin`}>  <FontAwesomeIcon icon={faFileAlt} /><span>Make Admin</span></Link>
                    </li>
                    <li>
                        <Link to={`${url}/manageService`}>  <FontAwesomeIcon icon={faFileAlt} /><span>Manage Services</span></Link>
                    </li>
                 
                </ul>
            </div>
            </div>
           <div className="col-lg-8 col-xs-12 col-md-8">
           <Switch>
                <PrivateRoute exact path={path}>
                <Booking/>
                </PrivateRoute>
                <Route path={`${path}/serviceId/:id`}>
                   <Booking/>
                </Route>
                <Route path={`${path}/bookList`}>
                   <BookList/>
                </Route>
                <Route path={`${path}/review`}>
                   <Review/>
                </Route>
                <Route path={`${path}/addService`}>
                   <AddService/>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                   <MakeAdmin/>
                </Route>
                <Route path={`${path}/manageService`}>
                   <ManageService/>
                </Route>
                <Route path={`${path}/orderList`}>
                   <OrderList/>
                </Route>
            </Switch>
           </div>
        </div>
        <div>
        <Footer/>
        </div>
    </div>

    </>    
    );
};

export default Admin;
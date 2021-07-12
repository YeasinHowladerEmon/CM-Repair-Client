import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import smart from '../../../images/smartphone.png'
import './NavBar.css'

const NavBar = () => {

    // class header = document.getElementsByClassName('.start-style'){
    //     scroll = {
    //          scroll = (window).scrollTop();
    //         if(scroll >= 10){
    // 			header.removeClass('start-style').addClass("scroll-on");
    //         }
    //         else{
    //             header.removeClass("scroll-on").addClass('start-style');
    //         }
    //     }
    // }
    // (function($) { "use strict";

	// let headers = () => {
	// 	var header = (".start-style");
	// 	window('scroll',()=>{    
	// 		let scroll = (window).scrollTop();
		
	// 		if (scroll >= 10) {
	// 			header.removeClass('start-style').addClass("scroll-on");
	// 		} else {
	// 			header.removeClass("scroll-on").addClass('start-style');
	// 		}
	// 	});
	// };		

	

//     function($) { "use strict";

// 	$(function() {
// 		var header = $(".start-style");
// 		$(window).scroll(function() {    
// 			var scroll = $(window).scrollTop();
		
// 			if (scroll >= 10) {
// 				header.removeClass('start-style').addClass("scroll-on");
// 			} else {
// 				header.removeClass("scroll-on").addClass('start-style');
// 			}
// 		});
// 	});		
// }(); 


	// 	let header = document.getElementsByClassName('.start-style'){
	// 	let scroll= () => {    
	// 		const scroll = (window).scrollTop();
		
	// 		if (scroll >= 10) {
	// 			header.removeClass('start-style').addClass("scroll-on");
	// 		} else {
	// 			header.removeClass("scroll-on").addClass('start-style');
	// 		}
	// 	};
    // };
    return (
        <>
            {/* <Navbar collapseOnSelect expand="lg" bg="light">
                <Navbar.Brand href="/home">
                    <img style={{width: "10%"}} src={smart} alt=""/>
                    CM REPAIR
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="">
                        <Nav.Link as={Link} style={{marginLeft: '200px'}} className="ms-5" to='/admin'>Admin</Nav.Link>
                        <Nav.Link as={Link} className="ms-5" to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} className="ms-5" to='/' >Home</Nav.Link>
                    </Nav>
  </Navbar.Collapse>
            </Navbar>
            <Navbar> 


  
</Navbar>  */}



            <div className="navigation-wrap bg-light start-header start-style">
                <div className="container-fluid">
                <Navbar collapseOnSelect
                    expand="lg"
                    variant="light"
                    className="navbar navbar-expand-md navbar-light">
                    <Navbar.Brand  style={{ color: "#3a4256", fontSize: "1.55rem" }} className="navbar-brand ml-md-5" href="/" target="_blank">
                        <img
                              width="40"
                             height="40"
                            className="d-inline-block align-top"
                             src={smart} alt="smart" />
                              <strong> CM REPAIR</strong>
                    </Navbar.Brand>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler"> <span className="navbar-toggler-icon"></span></Navbar.Toggle> */}
                    <Navbar.Collapse className="collapse navbar-collapse" id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto py-4 py-md-0">
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 active">Home</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Contact</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Service</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Reviews</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5 ">Dashboard</Nav.Link>
                            <Nav.Link className="nav-item nav-link pl-4 pl-md-0 mr-0 mr-md-5">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
                </div>
            </div>
        </>
    );
};

export default NavBar;
import React from 'react'
import { Link } from "react-router-dom";




export const Navbar = () => {
    return (


            <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3" >
                <div class="flex-row d-flex" >
                    <button type="button" class="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="###" title="Free Bootstrap 4 Admin Template">Record Book</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">

                <ul class="navbar-nav" >
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="######">Home <span class="sr-only">Home</span></a> */}
                            <Link to='/Dashboard' className='nav-link'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="####">Link</a>
                        </li>
                    </ul>












                    
                    <ul class="navbar-nav ml-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#####">Sign In <span class="sr-only">Home</span></a> */}
                            <Link to='/Register' className='nav-link'>Sign In</Link>
                        </li>
                        <li class="nav-item active">
                            {/* <a class="nav-link" href="#####">Login <span class="sr-only">Home</span></a> */}
                            <Link to='/' className='nav-link' id="links-signin">Login</Link>
                        </li>
                    </ul>


                        <li class="nav-item">
                            <a class="nav-link" href="#####" data-toggle="collapse">Alert</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#####" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar

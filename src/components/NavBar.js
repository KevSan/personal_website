import React, { Component } from 'react';
import { Link } from 'react-scroll';
import "./style.css";

export class MyNavBar extends Component{
    render(){
        return(
         <section id="nav-bar">
          <nav className="navbar navbar-default navbar-fixed-top">
           <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
              <li>
               <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
               >Home</Link>
              </li>
              <li>
               <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
               >Portfolio</Link>
              </li>
              <li>
               <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
               >Blog</Link>
              </li>
              <li>
               <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
               >Contact
               </Link>
              </li>
             </ul>
            </div>
           </div>
          </nav>
         </section>
        );
    }
}
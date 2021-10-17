import React from 'react';
import '../styles/header.css';
import {Route, Switch} from 'react-router-dom';

import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';


const Header = () => {

    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random()*3);

    // const img = images[index]; 

    return ( 
        <>
        <Switch>
        <Route path="/" exact render={()=>(
        <img src={img1} alt="city"/>
        )}/>

        <Route path="/products" render={()=>(
        <img src={img1} alt="city"/>
        )}/>

        
        <Route path="/contact" render={()=>(
        <img src={img2} alt="city"/>
        )}/>
        
        
        <Route path="/admin" render={()=>(
        <img src={img3} alt="city"/>
        )}/>
        
        <Route render={()=>(
        <img src={img1} alt="city"/>
        )}/>
        
        </Switch>
        </>
     );
}
 
export default Header;
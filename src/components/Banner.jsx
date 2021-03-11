import React from "react"
import Navbar from "./Navbar";
import Button from '@material-ui/core/Button';

const Banner = () => {
    return(
       <div className="background">    
<div className="bg" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bg.jpg'})`,
  
}}>


      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <div className="bannercontent">
              <h3>Where Dreamers Become Doers</h3>
              <h4>We provide the tunnel, but it's up to you to begin your journey</h4>
              <div className="button1">
              <Button variant="contained" className="btnp" color="primary" href="">
                Take that first step
              </Button>
              <div className="button1">
              <Button variant="contained" className="btns" color="secondary" href="">
                    become a mentor
              </Button>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    )
}

export default Banner;
import React from 'react'
import { larningfeature } from "../Css/larningfeature.css"
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import LanguageIcon from '@material-ui/icons/Language';
import SecurityIcon from '@material-ui/icons/Security';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';

function Larningfeature() {
    return (
       
        <div className="body">
         <div>
            <h1 className="head1">World-Class Learning Feature</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="rape">
                <div className="icons">
                  <SchoolIcon className="fa"/>
                </div>
                <h1 className="learningh">
                 Top Rated <br/> Courses
                  </h1>
                  <p className="ltext">Develop your skills, become an expert in your industry, 
                      and get recognized.</p>
                
              </div>
            </div>
  
            <div className="col-4">
             
                <div className="icons">
                <PeopleIcon/>
                </div>
                <h1 className="learningh">
                Team of Experts
                  </h1>
                  <p className="ltext">We have a team of education experts working dedicatedly to provide you best 
                      learning experience.</p>
               
              
            </div>
  
            <div className="col-4">
              
                <div className="icons">
               < HeadsetMicIcon/>
                </div>
                <h1 className="learningh">
                24/7 Online Support
                  </h1>
                  <p className="ltext">Our dedicated support team working round the clock,
                   always available to listen to you.</p>
                  
            
            </div>
            </div>
            </div>

            <div className="container">
          <div className="rows">
            <div className="col-4">
             
                <div className="icons">
                  <LanguageIcon/>
                </div>
                <h1 className="learningh">
                Work Globally
                  </h1>
                  <p className="ltext">Upgrade your skills to explore the opportunity in local job
                   markets or the global freelancing marketplace.</p>
                
              
            </div>
  
            <div className="col-4">
             
                <div className="icons">
                <SecurityIcon/>
                </div>
                <h1 className="learningh">
                100% Verified Content
                  </h1>
                  <p className="ltext">Our course contents are 100% verified and continuously getting updated.</p>
               
             
            </div>
  
            <div className="col-4">
              
                <div className="icons">
               < BrightnessLowIcon/>
                </div>
                <h1 className="learningh">
                Certification
                  </h1>
                  <p className="ltext">Get your certificate online, showcase your abilities, stay ahead of others.</p>
                  
             
            </div>
            </div>
            </div>
  
  
      </div>
    )
}

export default Larningfeature

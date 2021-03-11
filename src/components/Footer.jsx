import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { footer } from "../Css/footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="tops">
            <div className="top">
         
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
              <h4>Company</h4>  
              <div className="p">
             <p>About Us</p>
             <p>Careers</p>
             <p>Our Strength</p>
             </div>
            </Col>
            
            
          </Row>
        </Container>
            </div>
          </div>

          <div className="top">
         
         <div className="gird.">
         <Container>
         <Row className="row">
           <Col sm={4}>
             <h4> Policies</h4>  
             <div className="p">
            <p>Terms of Services</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            </div>
           </Col>
          
         </Row>
       </Container>
           </div>
         </div>

         <div className="top">
         
         <div className="gird.">
         <Container>
         <Row className="row">
           <Col sm={4}>
             <h4> Support</h4> 
             <div className="p">
            <p>Help & Support</p>
            <p>Hotline</p>
            <p>FAQ</p>
            </div> 
           </Col>
           
         </Row>
       </Container>
           </div>
         </div>
         </div>
            
            <div className="bottoms">
            <div className="top">
         
         <div className="gird.">
         <Container>
         <Row className="row">
           <Col sm={4}>
               <div className="sb">
               <div className="bottomp">
               <p>CodersTrust is a global platform for learners and educators.
                 We at CodersTrust, envision a world where anyone from anywhere will 
                 have access to knowledge and develop skills.</p>
                 </div>
             <h4> Get connected with us on social networks!</h4>
             <div className="social-icon">
          <a className="s" href="">  <FacebookIcon /></a>
          <a className="s" href="">  <TwitterIcon /></a>
          <a className="s" href="">  <LinkedInIcon /></a>
          <a className="s" href="">  <YouTubeIcon/></a>
       </div>
             </div> 
           </Col>
           
         </Row>
       </Container>
           </div>
         </div>
         <div className="top">
         
         <div className="gird.">
         <Container>
         <Row className="row">
           <Col sm={4}>
               <div className="sbs">
               
             <h4> payroll</h4>
             <div>
             <img className="visa" src="/img/payment.png" alt="image" />
             
             </div>
             </div> 
           </Col>
           
         </Row>
       </Container>
           </div>
         </div>
         </div>
            
        </div>
        
    )
}

export default Footer

import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player'
import { explore } from "../Css/explore.css"


function Explore() {
    return (
        <div className="explore">
           
            <Container>
          <Row >
            <Col sm={4}>
              <div className="video">
              < ReactPlayer 
               controls url='https://www.youtube.com/watch?v=8jVWsAMRSxM'/>
              </div>
            
           
            </Col>
            
            <Col sm={4}>
                <div className="rightsideS">
                    <h1  style={{color: "black"}}>EXPLORE YOUR TRUE POTENTIAL!</h1>
                    <p>Our top instructors are waiting for you to step in so that they can upgrade
                     your repertoire and unlock the doors to limitless possibilities for you.</p>
                </div>
            
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default Explore

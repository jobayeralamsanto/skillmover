import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { ourskill } from "../Css/ourskill.css"



export default class MultipleItems extends Component {
  render() {
    
    return (
      <div className="cardrap2">
         <Container>
          <Row className="row">
            <Col sm={4}>
                <div className="leftside">
              <h1 className="h2">Our Skills</h1>
              <h4 className="text">Our courses are designed for effective learning to help develop your skills as well as implement them with real projects.</h4>
              </div>
              
            </Col>
            <Col className="colright" sm={4}>
                
        <div className="cardbox2">
      
          
          
<div className="cardbody1">
          <img className="image" src="/img/t5.png" alt="category" />
          <div>
            <h4  className="header">Technical skills
            </h4>
          </div>
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
              <p className="pera">We bestow upon you the technical know-how and the problem-solving skills
                   to ace all the intricacies of the related tasks.</p>
            </Col>
            
            
          </Row>
        </Container>
            </div>
        
          </div>
         
          <div className="cardbody1">
          <img className="image" src="/img/f3.png" alt="category" />
          <div>
            <h4  className="header">Creative Skills
            </h4>
          </div>
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
              <p className="pera">We help your creativity to blossom into expertise so that you can bring 
                  uniqueness in everything you do.</p>
            </Col>
            
            
          </Row>
        </Container>
            </div>
          </div>
         
          <div className="cardbody1">
          <img className="image" src="/img/s13.png" alt="category" />
          <div>
            <h4  className="header">Practical Experience
            </h4>
          </div>
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
              <p className="pera">We are hands-on with everything we discuss with you so
               that you can fathom the real-life applications and implications thoroughly.</p>
            </Col>
            
           
          </Row>
        </Container>
            </div>
          </div>

        
        </div>
        </Col>
          </Row>
        </Container>

      </div>
    
      
    
    );
  }
}

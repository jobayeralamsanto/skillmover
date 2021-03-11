import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import { growingfast } from "../Css/growingfast.css"

export default class MultipleItems extends Component {
  render() {
    
    return (
      <div className="bodyg">
         <Container>
          <Row className="row">
            <Col sm={4}>
                <div className="leftbody">
              <h1 className="lefttext">We are growing fast</h1>
        
              </div>
              
            </Col>
            <Col className="colright" sm={4}>
                
        <div className="rightbody">
      
          
          
<div className="rightbox">
          
         
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
            <div>
            <h1  className="head">16
            </h1>
            <h3 className="h">Courses</h3>
          </div>
             
            </Col>
            
          </Row>
        </Container>
            </div>
        
          </div>
         
          <div className="rightbox">
        
         
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
            <div>
            <h1  className="head">76
            </h1>
            <h3 className="h">Students</h3>
          </div>
            
            </Col>
            
            
          </Row>
        </Container>
            </div>
          </div>

         

        
          <div className="rightbox">
         
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
                
          <div>
            <h1  className="head">29
            </h1>
            <h3 className="h">Subscribers</h3>
          </div>
              
            </Col>
            
            
          </Row>
        </Container>
            </div>
          </div>
         
          <div className="rightbox">
         
          
          <div className="gird.">
          <Container>
          <Row className="row">
            <Col sm={4}>
            <div>
            <h1  className="head">0
            </h1>
            <h3 className="h">Success stories</h3>
          </div>
             
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

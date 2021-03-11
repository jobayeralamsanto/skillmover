import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

function subscribe() {
    return (
        <div className="subscribe">
            <Container>
          <Row >
            <Col sm={4}>
              <div className="channel">
             <h1  style={{color: "#fff"}}>Subscribe to our newsletter</h1>
              </div>
            
           
            </Col>
            
            <Col sm={4}>
                <div className="sbox">
                <form className="s">
     <input type="text" className="search" placeholder="Your Email"/>
     </form>
                </div>
            
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default subscribe

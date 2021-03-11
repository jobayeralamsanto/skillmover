import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';

function Mentor() {
    return (
        <div className="mentorbody">
            <Container>
          <Row className="row">
            <Col sm={4}>
              <div className="colleft">
                  <h1 className="mh1"><span style={{color: "black"}}>BecomeA</span> <br />Mentor</h1>
                  <p className="mp">If you are specialized in something, take  it further! Share your skill
                   and knowledge.</p>
              </div>
              <div className="button2">
              <Button variant="contained" className="btnp" color="primary" href="">
                Aplly now
              </Button>
              </div>
            </Col>
            
            <Col sm={4}>
            <div className="imgmentor">
               <img src="/img/s11.png" alt="Mentor image" />
             </div>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default Mentor

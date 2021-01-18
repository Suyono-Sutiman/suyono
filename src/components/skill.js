import React from 'react'
import { Col, Container, Row, ProgressBar } from 'react-bootstrap'

function Skill(){
    return(
        <Container>
            <h1 style={{textAlign:'center', margin:'2rem 0 1rem 0'}}>Kemampuan saya</h1>
            <Row>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={90} label={'90%'}/>
                    <h5>HTML5</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={85} label={'85%'}/>
                    <h5>CSS3</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={91} label={'91%'}/>
                    <h5>JavaScript</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={93} label={'93%'}/>
                    <h5>React Js</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={87} label={'87%'}/>
                    <h5>Node Js</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={95} label={'95%'}/>
                    <h5>Gatsby Js</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={90} label={'90%'}/>
                    <h5>Bootstrap</h5>
                </Col>
                <Col xs={12} md={6} className='col-skill'>
                    <ProgressBar variant='dark' animated now={80} label={'80%'}/>
                    <h5>Figma</h5>
                </Col>
            </Row>
        </Container>
    )
}
export default Skill;
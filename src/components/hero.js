import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import hero from '../images/yono.jpg'

function Hero (){
    return(
    <Container fluid className='home'>
        <Row>
        <Col xs={{span:8, offset:2}} md={{span:6, offset:3}} lg={{span:4, offset:4}}>
            <Image src={hero} fluid className='hero-img'/>
        </Col>
        </Row>
        <h1>Hallo, Saya Suyono</h1>
        <h2>Seorang web <span>developer</span> serta <span>designer</span> dan juga seorang wibu.</h2>
        <div className='kontak-hero'>
        <Button variant='dark'>Telpon</Button>
        <Button variant='dark'>Pesan</Button>
        </div>
    </Container>
    )
}
export default Hero;
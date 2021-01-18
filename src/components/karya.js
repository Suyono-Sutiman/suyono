import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Karya(){
    return(
        <Container>
            <h1 style={{textAlign:'center', margin:'2rem 0 1rem 0'}}>Hasil karya saya</h1>
            <Row>
                <Col xs={12} md={6} lg={4} className='col-karya'>
                    <div className='img-box satu'></div>
                    <div className='text-box'>
                    <h5>Realine</h5>
                    <Button variant='light'>Lihat</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='col-karya'>
                    <div className='img-box dua'></div>
                    <div className='text-box'>
                    <h5>JJ interprice</h5>
                    <Button variant='light'>Lihat</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='col-karya'>
                    <div className='img-box tiga'></div>
                    <div className='text-box'>
                    <h5>Donad</h5>
                    <Button variant='light'>Lihat</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='col-karya'>
                    <div className='img-box empat'></div>
                    <div className='text-box'>
                    <h5>Foodshop</h5>
                    <Button variant='light'>Lihat</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} className='col-karya'>
                    <div className='img-box lima'></div>
                    <div className='text-box'>
                    <h5>Coffee</h5>
                    <Button variant='light'>Lihat</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Karya;
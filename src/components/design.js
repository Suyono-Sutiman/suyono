import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {MdDevices} from 'react-icons/md'
import {IoMdBulb, IoIosSpeedometer, IoIosRocket} from 'react-icons/io'

function Design(){
    return(
        <Container>
            <h1 style={{textAlign:'center', marginBottom:'1rem', paddingTop:'2rem'}}>Design saya selalu</h1>
            <Row>
                <Col xs={12} md={6} lg={3} className='col-design'>
                    <MdDevices className='icon-design'/>
                    <h3>Responsif</h3>
                    <p>Tata letak saya akan berfungsi di perangkat apa pun, besar atau kecil.</p>
                </Col>
                <Col xs={12} md={6} lg={3} className='col-design'>
                    <IoIosSpeedometer className='icon-design'/>
                    <h3>Cepat</h3>
                    <p>Waktu muat cepat dan interaksi bebas lag, prioritas tertinggi saya.</p>
                </Col>
                <Col xs={12} md={6} lg={3} className='col-design'>
                    <IoIosRocket className='icon-design'/>
                    <h3>Dinamis</h3>
                    <p>Situs web tidak harus statis, saya membuat halaman menjadi hidup.</p>
                </Col>
                <Col xs={12} md={6} lg={3} className='col-design'>
                    <IoMdBulb className='icon-design'/>
                    <h3>Intuitif</h3>
                    <p>Preferensi yang kuat untuk UX / UI yang mudah digunakan dan intuitif.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Design;
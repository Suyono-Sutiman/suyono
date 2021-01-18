import React from 'react'
import { Container } from 'react-bootstrap'
import {ImWhatsapp,ImPhone,ImEnvelop,ImFacebook,ImTwitter,ImInstagram,ImLinkedin} from 'react-icons/im'

function Kontak () {
    return(
        <Container fluid className='kontak' >
            <h3>Punya pertanyaan atau ingin bekerja sama?</h3>
            <div className='kontak-box'>
                <h4><ImPhone/></h4>
                <h4><ImWhatsapp/></h4>
                <h4><ImFacebook/></h4>
                <h4><ImInstagram/></h4>
                <h4><ImTwitter/></h4>
                <h4><ImLinkedin/></h4>
                <h4><ImEnvelop/></h4>
            </div>
        </Container>
    )
}
export default Kontak;
import React from 'react'
import { Container } from 'react-bootstrap'

const OurCertificates = () => {
  return (
    <>
      <Container>
        <div className="row certificates">
          <div className="col-md-3 certificates-images">
            <img src="/images/certificate-1.jpg" alt="" />
          </div>
          <div className="col-md-3 certificates-images">
            <img src="/images/certificate-2.jpg" alt="" />
          </div>
          <div className="col-md-3 certificates-images">
            <img src="/images/certificate-3.jpg" alt="" />
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurCertificates
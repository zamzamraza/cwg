import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { faEnvelope, faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactUs = () => {
  async function handleOnSubmit (e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
          if( !field.name) return;
          formData[field.name] = field.value;
        });
        fetch('api/mail',{
          method: 'post',
          body : JSON.stringify(formData)
        })
        console.log(formData);
  }
  return (
    <>

      <div className="contact-us-banner">
        <img src="/images/contact-us-banner.jpg" alt="" className='img-fluid' />
      </div>
      <div className="contact-info">
        <h1>Get In Touch</h1>
      </div>
      <section className="contact-us-main">
        <Container>
          <Row>
            <Col md={6}>
              <div>
                <div className="contact-form">
                  <form method='post' onSubmit={handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" className="form-control" id="name" required name='name' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" name='email' className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject:</label>
                      <input type="text" name='subject' className="form-control" id="subject" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message:</label>
                      <textarea name='message' className="form-control" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>

            </Col>
            <Col md={6}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.245669359428!2d47.96047437521857!3d29.27511507532004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9beb6ec80555%3A0xae2880a476480773!2sCrown%20International%20FMCG!5e0!3m2!1sen!2sin!4v1683266915250!5m2!1sen!2sin" className='contact-us-map' height="560" style={{ border: '0', overflow: 'hidden' }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
        <section className='get-in-touch'>
          <Container>
            <Row>
              <Col md={3}>
                <h4>Address</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  Alhamra Mall, Office No. 805, 8th Floor, Farwaniya, Kuwait.</p>
              </Col>
              <Col md={3}>
                <h4>Lets Talk</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  +965 51052112</p>
              </Col>
              <Col md={3}>
                <h4>WhatsApp</h4>
                <p>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </span>
                  +965 51052112</p>
              </Col>
              <Col md={3}>
                <h4>Sale Support</h4>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  info@crownintl-kwt.com</p>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  )
}

export default ContactUs
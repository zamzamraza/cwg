import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const TopNav = () => {
  return (
    <>
      <div className="topnav">
        <div className="container topnav">
          <div className="contact">
            <a href="mailto:info@crownintl-kwt.com">
              <span><FontAwesomeIcon icon={faEnvelope} /> info@crownintl-kwt.com</span></a>
             <a href="tel:+96551052112"> <span><FontAwesomeIcon icon={faPhone} /> +96551052112</span></a>
          </div>
          <div className="address">
            <p>
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Alhamra Mall, Office No. 311, 3rd Floor, Farwaniya,Kuwait.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav
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
              <span style={{ marginRight: '5px' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              info@crownintl-kwt.com</a>
            <span>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +96551052112</span>
          </div>
          <div className="address">
            <p>
              <span style={{ paddingRight: '5px' }}>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Alhamra Mall, Office No. 805, 8th Floor, Farwaniya,Kuwait.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav
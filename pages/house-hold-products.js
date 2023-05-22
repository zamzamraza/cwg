import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const data = [
  {
    productTitle: 'Lemon Max Paste Original',
    productImage: '/images/Website-ready/household/lemon-max-yello.jpg',
    modalTitle: 'Lemon Max Paste Original',
    modalText: 'Lemon Max Paste is specially formulated with glycerin to be gentle on hands, and yet remove the toughest of stains and stubborn grease to provide high-quality cleaning that lasts longer.',
    modalImage: '/images/Website-ready/household/lemon-max-yello.jpg',
    modalQuantity: '200gm, 400gm, 750gm'
  },
  {
    productTitle: 'Lemon Max Paste Lime',
    productImage: '/images/Website-ready/household/lemon-max-lime.jpg',
    modalTitle: 'Safe Sun Daily Multi-Function Sun Block PA +++ SPF 70',
    modalText: 'A superior cleaning formula with the power of real lemon juice, which is designed to cut grease from dishes, pots, pans and glasses. Lemon Max Paste, with the power of lime, cuts the toughest grease and leaves dishes sparkling clean and smelling great..',
    modalImage: '/images/Website-ready/household/lemon-max-lime.jpg',
    modalQuantity: '200gm, 400gm, 750gm'
  },
  {
    productTitle: 'Texapol Gold',
    productImage: '/images/Website-ready/household/texapol.jpg',
    modalTitle: 'Texapol Gold',
    modalText: 'Texapol Gold washing powder gives you a superior wash within an economical price, packed with an invigorating citrus fragrance. It has a powerful wash resulting in fragrant clothes.',
    modalImage: '/images/Website-ready/household/texapol.jpg',
    modalQuantity: '3kg, 10kg'
  },
  {
    productTitle: 'Lemon Max Bar',
    productImage: '/images/Website-ready/household/lemon-max-bar.jpg',
    modalTitle: 'Lemon Max Bar',
    modalText: 'Packed with the power of 1000 lemons, Max Bar cuts tough grease and leaves dishes sparkling and germ-free.',
    modalImage: '/images/Website-ready/household/lemon-max-bar.jpg',
    modalQuantity: '275gm, 90gm'
  },
  {
    productTitle: 'Express Bar',
    productImage: '/images/Website-ready/household/express-bar.jpg',
    modalTitle: 'Express Bar',
    modalText: 'Liquid Dishwash offers effective and quick solution to hard to cut grease on entire crockery be it utensils, dishes or pots, because it has Active Gel along with Lemon Oil. Its soft on hands and because of Its Anti-Bacterial Gel, it is effective for killing 99.9% of known germs also.',
    modalImage: '/images/Website-ready/household/express-bar.jpg',
    modalQuantity: '100gm'
  },
  {
    productTitle: 'Bonus Tristar',
    productImage: '/images/Website-ready/household/bonus-tristar.jpg',
    modalTitle: 'Texapol Gold',
    modalText: 'Bonus Tristar, No. 1 selling detergent and the choice of millions of people across the country is a platform brand that encourages conversion from traditional laundry products (laundry bars, soda/powder kits) to detergent powders. Bonus Tristar gives effortless cleaning and a pleasant, fragrant washing experience.',
    modalImage: '/images/Website-ready/household/bonus-tristar.jpg',
    modalQuantity: '950gm, 2kg, 3kg, 5kg'
  },
  {
    productTitle: 'King Sweepy Phenyl',
    productImage: '/images/Website-ready/household/sweepy-phynel.jpg',
    modalTitle: 'King Sweepy Phenyl',
    modalText: 'King sweepy phenyl • Sweepy white phenyl is ideal to clean the floors of Bathrooms, Kitchens, Living Rooms, Offices, Shops, Factories and Hospital etc. It also eliminates the germs and insects in these areas and has a refreshing fragrance to keep the environment fresh.',
    modalImage: '/images/Website-ready/household/sweepy-phynel.jpg',
    modalQuantity: '2.75 litre'
  },
  {
    productTitle: 'Klear Dishwash Gel',
    productImage: '/images/Website-ready/household/klear-dishwash.jpg',
    modalTitle: 'Klear Dishwash Gel',
    modalText: 'Liquid Dishwash offers effective and quick solution to hard to cut grease on entire crockery be it utensils, dishes or pots, because it has Active Gel along with Lemon Oil. Its soft on hands and because of Its Anti-Bacterial Gel, it is effective for killing 99.9% of known germs also.',
    modalImage: '/images/Website-ready/household/klear-dishwash.jpg',
    modalQuantity: '500ml'
  },
  {
    productTitle: 'Klear Glass Cleaner',
    productImage: '/images/Website-ready/household/klear-glass-cleaner.jpg',
    modalTitle: 'Klear Glass Cleaner',
    modalText: 'Klear Glass Cleaner gives a Streak Free Shine that lasts to Glass, Mirrors, Car Windshields, marble tops and all shining Appliance bodies. Its special formula removes dust and grease from the affected surface and also does not allow dust particles to settle on the surface for prolonged hours.    ',
    modalImage: '/images/Website-ready/household/klear-glass-cleaner.jpg',
    modalQuantity: '500ml'
  },
  {
    productTitle: 'King Odour Neutralizer',
    productImage: '/images/Website-ready/household/king-air-fresh.jpg',
    modalTitle: 'King Odour Neutralizer',
    modalText: 'King Odour Neutralizer eliminates odour naturally in an instant, leaving a lovely soothing and relaxing fragrance and is ideal to be used in Kitchens, Washrooms, Cars, near Garbage Bins and around households. Its: o Designed to combat ‘hard to get rid of smells’ o Reacts with odour causing compounds o Eliminates them, leaving a Clean, Fresh scent behind. o And is available in 4 aromatic fragrances',
    modalImage: '/images/Website-ready/household/king-air-fresh.jpg',
    // modalQuantity: '3kg, 10kg'
  },
  {
    productTitle: 'Delite Laundry Detergent Gel',
    productImage: '/images/Website-ready/household/king-air-fresh.jpg',
    modalTitle: 'Delite Laundry Detergent Gel',
    modalText: 'Made with advanced stain removal and brightening technology, Delite Detergent Gel cleans, disinfects, and treats fabric well to make it look tidy, bright and scented. It removes tough stains, dirt and bad smell without damaging clothes and is suitable for all types of fabric. Since Delite Liquid Detergent is soft on clothes, it also does not affect the colors of clothes and gives clothes a look as if they are new. Its Anti-Bacterial Gel is effective for killing 99.9% of known germs as well.',
    modalImage: '/images/Website-ready/household/king-air-fresh.jpg',
    modalQuantity: '1 litre'
  },
  {
    productTitle: 'Kingtox P&F Air Freshner',
    productImage: '/images/Website-ready/household/P&F-air.jpg',
    modalTitle: 'Kingtox P&F Air Freshner',
    modalText: 'Push & Fresh Air Fresherners is used to purify and to aromatize the air you breathe as it. - Reduces airborne bacteria making the air you breathe healthier and cleaner. - Releases Fresh aromatic fragrances. Lively fragrances of jasmine, Rose, Lavender, and Sandalwood - It can be used in offices, cars, reception, rooms, lobbies, conference hall, toilets, drawing rooms and more.',
    modalImage: '/images/Website-ready/household/P&F-air.jpg',
    modalQuantity: '14ml'
  },
  {
    productTitle: 'King Sweepy Toilet Bowl Cleaner',
    productImage: '/images/Website-ready/household/toilet-bowl-cleaner.jpg',
    modalTitle: 'King Sweepy Toilet Bowl Cleaner',
    modalText: 'Sweepy Toilet Bowl Cleaner shines up the toilet bowl by removing hardened stains and by removing rust, lime and hard water build ups as it clings to the stains for a powerful clean. Its Anti-Bacterial Gel is effective for killing 99.9% of known germs as well.    ',
    modalImage: '/images/Website-ready/household/toilet-bowl-cleaner.jpg',
    modalQuantity: '500ml'
  },
]
const SkinCare = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (value) => {
    setModalData(value)
    setShow(true)
  };

  const [modalData, setModalData] = useState([])

  return (
    <>
       <section className='product-container'>
       <div>
            <img src="/images/our-prods-banner/household.jpg" alt="about-us" className='img-fluid mb-5' />
      </div>
      <Container>
        <Row>
          {data && data.map((value, index) => {
            return (
              <>
                <Col>
                  <Card style={{ width: '16rem' }} key={`card-${index}`}>
                    <Card.Img variant="top" src={value.productImage} />
                    <Card.Body>
                      <Card.Text className='text-center'>{value.productTitle}</Card.Text>
                      <Button variant="outline-info" style={{width: '100%'}} onClick={()=>handleShow(value)}>
                        Quick View
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
      </section>

      <Modal show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{modalData.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={5} sm={12}>
                <img src={modalData.modalImage} alt="" className='img-fluid' />
              </Col>
              <Col md={6} sm={12}>
                <div className="moddal-content">
                  {/* <h3>{modalData.modalTitle}</h3> */}
                  <p>{modalData.modalText}</p>
                  <p>{modalData.modalQuantity}</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}




export default SkinCare
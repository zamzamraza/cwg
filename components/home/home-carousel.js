import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner-image5.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner-image5.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner-image5.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomeCarousel
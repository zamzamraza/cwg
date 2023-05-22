import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/talabatbanner.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/banner- sample.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/crownsessential.webp"

                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/kingtox.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/moksh.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/tulip.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/website-data/upper-banners/lotus.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomeCarousel
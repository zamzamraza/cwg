import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductSlider = () => {
    return (
        <>
            <section className='home-product-slider'>
                <Container>
                    <div className="container-product-heading">
                        <h2>Crown Essentials</h2>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
                        // pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        // loop={true}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                            320: {
                                width: 320,
                                slidesPerView: 1
                            }
                        }}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                       
                    >
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image3.jpg" />
                                <Card.Body>
                                    <Card.Title>Pure Alovera gel</Card.Title>
                                    <Button variant="primary">View More</Button>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default ProductSlider
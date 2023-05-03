import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductMarket = () => {
    return (
        <>
            <section className="product-market">
                <Container>
                    <div className="product-market-heading">
                        <h2>Our Product Markets</h2>
                        <p>As one of the largest FMCG companies operating in Kuwait and across the world, Crown International (CI) has approx 15 brands spanning 10 distinct categories such as soaps, shampoos, skin care, detergents, toothpaste, cosmetics, deodorants etc. These brands are a part of life in many households in Kuwait.</p>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
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
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                       
                    >
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/images/product-image1.jpg" />
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default ProductMarket
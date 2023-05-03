import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const OurBrands = () => {
    return (
        <>
            <section className="our-brands">
                <div className="our-heading text-center mt-3 mb-3">
                    <h2>Our Brands</h2>
                </div>
                <Swiper
                    // pagination={{
                    //     type: "progressbar",
                    // }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="our-brand-img">
                            <img src="/images/banner-image5.jpg" alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="our-brand-img">
                            <img src="/images/banner-image5.jpg" alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="our-brand-img">
                            <img src="/images/banner-image5.jpg" alt="" className='img-fluid' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <div className="our-brand-content text-center">
                    <p>
                        We offer a variety of products under multiple brands to all customers. Crown International is an ISO and OHSAS certified company. We stand for high quality products, Professional management and ethical business practices.We are currently having a well-resourced team and marketing professionals of high caliber who are customer centric and result oriented. Thus we empower our customers and partners to capitalize on opportunities in our region.</p>
                        <Button variant="outline-dark">See All Products</Button>
                </div>
            </section>
        </>
    )
}

export default OurBrands
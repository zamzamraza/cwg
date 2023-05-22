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
                        <p>As one of the largest FMCG companies operating in Kuwait and across the world, Crown Worldwide Group (CWG) has approx 15 brands spanning 10 distinct categories such as soaps, shampoos, skin care, detergents, toothpaste, cosmetics, deodorants etc. These brands are a part of life in many households in Kuwait.</p>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={5}
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true}
                        breakpoints={{
                            // // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 4,
                            },
                            320: {
                                width: 220,
                                slidesPerView: 1
                            }
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}

                    >
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/al-hakimi.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/big-c.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/city-centre.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/grand.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/holiday-inn.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/india-gate.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/kabayan.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/lo-cost.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/mango.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/meem-market.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/mrg.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/on-cost.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="product-market-image-container">
                                <img src="/images/website-data/market-logos/ramez.webp" className='product-market-slider-image' alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default ProductMarket
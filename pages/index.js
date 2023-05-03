import React from 'react'

import HomeCarousel from '@/components/home/home-carousel';
import FixedImageSection from '@/components/home/fixed-image-section';
import ProductCtegory from '@/components/home/product-category';
import ProductSlider from '@/components/home/product-slider';
import OurBrands from '@/components/home/our-brands';
import ProductMarket from '@/components/home/product-market';

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <FixedImageSection />
      <ProductCtegory />
      <ProductMarket />
      <ProductSlider />
      <OurBrands />
    </>
  )
}

export default Home
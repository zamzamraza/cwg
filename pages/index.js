import React from 'react'
import HomeCarousel from '@/components/home/home-carousel';
import FixedImageSection from '@/components/home/fixed-image-section';
import ProductSlider from '@/components/home/product-slider';
import ProductMarket from '@/components/home/product-market';
import ProductCategory from '@/components/home/newProductCat';
import OurBrand from '@/components/home/our-brand';

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <FixedImageSection />
      <ProductCategory />
      <ProductMarket />
      <OurBrand />
    </>
  )
}
 
export default Home
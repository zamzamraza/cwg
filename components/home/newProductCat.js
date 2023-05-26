import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

const data = [
  {
    title: "Skin Care",
    img: "/images/banner-01.jpg",
    src:'/skin-care'
  },
  {
    title: "House Hold Products",
    img: "/images/banner-02.jpg",
    src:'/house-hold-products'
  },
  {
    title: "Hair Care",
    img: "/images/banner-03.jpg",
    src:'/hair-care'
  },
  {
    title: "Oral Hygiene",
    img: "/images/banner-04.jpg",
    src:'/oral-hygiene'
  },
  {
    title: "Pest Control",
    img: "/images/pest-control-bg-category.jpg",
    src:'/pest-control'
  },
  {
    title: "Incense Sticks",
    img: "/images/banner-06.jpg",
    src:'/incense-sticks'
  },
  {
    title: "Cosmetics",
    img: "/images/banner-07.jpg",
    src:'/cosmetics'
  },
  {
    title: "Cotton Products",
    img: "/images/banner-08.jpg",
    src:'/cotton-products'
  },
  {
    title: "Crown Essentials",
    img: "/images/crown-essentials-category.jpg",
    src:'/crown-essentials'
  },
  {
    title: "Adhesive Material",
    img: "/images/tapes.jpeg",
    src:'/adhesive-meterial'
  },
];
const ProductCategory = () => {
  return (
    <>
      <Container>
        <div className="our-products">
          <h2>Our Products Categories</h2>
          <p>
            At Crown Worldwide Group we offer multiple Brands & products to
            retail customers under the categories of all the Fmcg Products in
            Kuwait.
          </p>
        </div>
        <div className="row products-category mb-3">
          {data &&
            data.map((item, index) => {
              return (
                <div className="box col-md-5 col-xl-3 border" key={`product-category-${index}`}>
                  <h5>{item.title}</h5>
                  <img
                    src={item.img}
                    alt=""
                    className="img-fluid"
                  />
                  <Link href={item.src}>
                    <div class="overlay">
                      <div class="text">View More</div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default ProductCategory;

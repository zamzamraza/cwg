import React from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    src: "/images/talabatbanner.webp",
  },
  {
    src: "/images/website-data/upper-banners/banner- sample.webp",
  },
  {
    src: "/images/website-data/upper-banners/crownsessential.webp",
  },
  {
    src: "/images/website-data/upper-banners/kingtox.webp",
  },
  {
    src: "/images/website-data/upper-banners/moksh.webp",
  },
  {
    src: "/images/website-data/upper-banners/tulip.webp",
  },
  {
    src: "/images/website-data/upper-banners/lotus.webp",
  },
];
const HomeCarousel = () => {
  return (
    <>
      <Carousel>
        {data &&
          data.map((item, index) => {
            return (
              <Carousel.Item key={`home-carousel-${index}`}>
                <img
                  className="d-block w-100"
                  src={item.src}
                  alt="slide"
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
    </>
  );
};

export default HomeCarousel;

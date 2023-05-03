import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const ProductCtegory = () => {
    return (
        <>
            <Container>
                <div className='our-products'>
                    <h2>Our Products Categories</h2>
                    <p>At Crown International we offer multiple Brands & products to retail customers under the categories of all the Fmcg Products in Kuwait.</p>
                </div>

                <div className="row products-category mb-3">
                    <div className="box col-md-3 border">
                        <h5>Skin Care</h5>
                        <Link href='/skin-care'>
                            <img src="/images/banner-01.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>House Hold Products</h5>
                        <Link href='/house-hold-products'>
                            <img src="/images/banner-02.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Hair Care</h5>
                        <Link href='/hair-care'>
                            <img src="/images/banner-03.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Oral Hygiene </h5>
                        <Link href='/oral-hygiene'>
                            <img src="/images/banner-04.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Pest Control</h5>
                        <Link href='/pest-control'>
                            <img src="/images/banner-05.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Incense Sticks</h5>
                        <Link href='/incense-sticks'>
                            <img src="/images/banner-06.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Cosmetics</h5>
                        <Link href='/cosmetics'>
                            <img src="/images/banner-07.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Cotton Products</h5>
                        <Link href='/cotton-products'>
                            <img src="/images/banner-08.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Crown Essentials</h5>
                        <Link href='/crown-essentials'>
                            <img src="/images/banner-09.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="box col-md-3 border">
                        <h5>Adhesive Material</h5>
                        <Link href='/adhesive-meterial'>
                            <img src="/images/tapes.jpeg" alt="" />
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProductCtegory
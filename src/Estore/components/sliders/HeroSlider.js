import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper';


import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';


const HeroSlider = () => {

    const heroProducts = () => [
        {
            id: 1,
            images: [
                "/images/c1.jpg"
            ],
        },
        {
            id: 2,
            images: [
                "/images/c2.jpg"
            ],

        },
        {
            id: 2,
            images: [
                "/images/c3.jpg"
            ],


        }

    ];

    return (
        <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            speed={400}
            spaceBetween={100}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            {
                heroProducts().map((item, i) => {
                    const { id, images } = item;

                    return (
                        <SwiperSlide
                            key={id}
                        >
                            <figure className="hero_item_img">
                                <img src={images} alt="product-img" />
                            </figure>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
};

export default HeroSlider;
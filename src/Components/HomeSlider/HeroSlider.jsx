import React, { useEffect, useState } from 'react';
import Sliderdetails from './Sliderdetails'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const HeroSlider = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('/skilldata.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    course.map(item =>
                        <SwiperSlide>
                            <Sliderdetails course={item} />
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default HeroSlider;

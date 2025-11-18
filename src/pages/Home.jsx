import React from 'react';
import HeroSlider from '../Components/HomeSlider/HeroSlider';
import PopularSkill from '../Components/PopularSkill/PopularSkill';


const Home = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-5xl'>Explore it!!!!</h1>
           <HeroSlider></HeroSlider>
           <PopularSkill></PopularSkill>
        </div>
    );
};

export default Home;
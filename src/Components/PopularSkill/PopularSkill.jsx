import React, { use } from 'react';
import SkillCard from './SkillCard';
const skillpromise = fetch("/skilldata.json").then(res=>res.json())

const steps = [
    { id: 1, title: "Browse Skills", description: "Explore thousands of available skills.", icon: "🔍" },
    { id: 2, title: "Select Skill", description: "Choose the skill you want to learn.", icon: "🎯" },
    { id: 3, title: "Book a Session", description: "Reserve a slot with the provider.", icon: "📅" },
    { id: 4, title: "Learn & Grow", description: "Start learning and enhance your skills.", icon: "🚀" },
];

const PopularSkill = () => {
    const skilldata= use(skillpromise);
    const topProvider = skilldata.filter(data=> data.rating > 4.6)
    // console.log(topProvider)
    return (
        <div>
            <h1 className='text-center text-5xl mb-3'>Popular Skill!!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    skilldata.map(data=> <SkillCard skilldata={data}></SkillCard>)
                }          
            </div>
            <div className='my-5'>
                <h1  className='text-center text-5xl mt-12 mb-6'>Top Providers...</h1>
               <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                 {
                  topProvider.map(data=> <SkillCard skilldata={data}></SkillCard>)
                }
               </div>
            </div>


            <div>
                <div className="py-16 bg-base-200">
            <h2 className="text-4xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {steps.map(step => (
                    <div key={step.id} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
            </div>
        </div>
    );
};

export default PopularSkill;
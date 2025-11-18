import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData, useParams } from 'react-router';
import VewiDetails from '../Components/VewiDetails';

const SkillDetails = () => {
    const skilldata = useLoaderData();
    const { id } = useParams()
    const [singledata,setSingleData]=useState({})
    
    useEffect(() => {
        const details = skilldata.find(skill => skill.skillId == id)
        setSingleData(details)  
    }, [skilldata, id])
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <VewiDetails singledata={singledata}></VewiDetails>
            </main>
        </div>
    );
};

export default SkillDetails;
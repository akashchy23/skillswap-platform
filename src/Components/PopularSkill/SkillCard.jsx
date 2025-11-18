import React from 'react';

const SkillCard = ({skilldata}) => {
    return (
        <div className="card bg-base-100 shadow-xl rounded-2xl p-4">
            <figure className="w-full h-48 bg-base-200 flex items-center justify-center rounded-xl overflow-hidden">
                <img src={skilldata.image} alt="" className="w-full h-full object-cover" />
            </figure>

            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{skilldata.skillName}</h2>

                <p className="text-sm text-gray-500">⭐ Rating: {skilldata.rating}</p>
                <p className="text-sm font-semibold text-primary">💲 Price: {skilldata.price}</p>
                <div className="card-actions justify-end mt-3">

                    <button className="btn btn-primary btn-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
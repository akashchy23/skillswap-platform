import React from 'react';
import toast from 'react-hot-toast';
const VewiDetails = ({singledata}) => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        toast.success("Session booked successfully!")
        // console.log("clicked")
        event.target.name.value=""
        event.target.email.value=""
    }
    return (
        <div className="max-w-7xl mx-auto my-12 p-6 bg-base-100 rounded-2xl shadow-lg">

            <div className='flex flex-col md:flex-row gap-8'>
                {/* Image */}
                <div className="md:w-1/2 rounded-xl overflow-hidden">
                    <img
                        src={singledata.image}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Details */}
                <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{singledata.skillName}</h1>
                        <p className="text-gray-500 mb-2">
                            <span className="font-semibold">Category:</span> {singledata.category}
                        </p>
                        <p className="text-gray-500 mb-2">
                            <span className="font-semibold">Provider:</span> {singledata.providerName}
                        </p>
                        <p className="text-gray-500 mb-2">
                            <span className="font-semibold">Email:</span> {singledata.providerEmail}
                        </p>
                        <p className="text-gray-500 mb-2">
                            <span className="font-semibold">Rating:</span> ⭐ {singledata.rating}
                        </p>
                        <p className="text-gray-500 mb-2">
                            <span className="font-semibold">Slots Available:</span> {singledata.slotsAvailable}
                        </p>
                        <p className="text-gray-700 mt-4">{singledata.description}</p>
                    </div>
                    <p className="text-xl font-bold mb-4"> Price: ${singledata.price}</p>
                    <div className="mt-6">
                        <h1 className='text-center text-3xl font-bold'>Book Session</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* for name */}
                            <label className="label">Your Name</label>
                            <input name='name' type="text" required  className="input input-bordered w-full" />
                            
                            {/* for email */}
                             <label className="label">Your Email</label>
                            <input type="email" name="email" id="" className="input input-bordered w-full"/>

                            <button type="submit" className="btn btn-primary w-full">
                                 Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VewiDetails;
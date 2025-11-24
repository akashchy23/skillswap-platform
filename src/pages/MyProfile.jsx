import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const [isOpen, setOpen] = useState(false)
    const handleToggleupdateBtn = () => {
        setOpen(!isOpen)
    }
    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        // console.log(name,photourl,"clicked")
        updateUser({ displayName: name, photoURL: photourl })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photourl })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='my-10'>
            <div className='flex flex-col space-y-3 items-center justify-center'>
                <div className="avatar">
                    <div className="w-40 rounded">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className='text-center space-y-0.5'>
                    <h1 className='font-semibold text-2xl'>{user?.displayName}</h1>
                    <p className='font-medium text-xl'>{user?.email}</p>
                </div>
                <button onClick={handleToggleupdateBtn} className='btn btn-primary mb-2'>Update Profile</button>

                {
                    isOpen && <form onSubmit={handleUpdateProfile} className='card-body'>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Enter your name" required />

                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input name='photourl' type="text" className="input" placeholder="Photo URL" required />

                            <button className='btn btn-neutral'>Update</button>
                        </fieldset>
                    </form>
                }
            </div>
        </div>
    );
};

export default MyProfile;
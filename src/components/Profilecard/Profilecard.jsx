import React from 'react'
import './Profilecard.css'
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const Profilecard = () => {
    const profilepage = true;
    return (
        <div className='profilecard'>
            <div className='profileimages'>
                <img src={Cover} alt='no-profile' />
                <img src={Profile} alt='no-profile' />

            </div>
            <div className='profilename'>
                <span>Haritha </span>
                <span>Web Developer </span>

            </div>

            <div className='profilestatus'>
                <hr />
                <div >
                    <div className='follow'>
                        <span>6,866</span>
                        <span>Followings</span>
                    </div>
                    <div className='verticalline'></div>
                    <div className='follow'>
                        <span>5</span>
                        <span>Followers</span>
                    </div>
                    {
                        profilepage && (
                            <>

                                <div className='verticalline'></div>
                                <div className='follow'>
                                    <span>5</span>
                                    <span>Posts</span>
                                </div>

                            </>
                        )
                    }
                </div>
                <hr />
            </div>
            {profilepage? '':<span className='myprofile'>My Profile</span>
}
        </div>
    )
}

export default Profilecard
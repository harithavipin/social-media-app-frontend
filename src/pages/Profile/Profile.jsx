import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import Postside from '../../components/Postside/Postside'
import Profilecard from '../../components/Profilecard/Profilecard'
import Rightside from '../../components/Rightside/Rightside'


const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='Profilecenter'>
        <Profilecard />
        <Postside />
      </div>
      <Rightside/>
    </div>
  )
}

export default Profile
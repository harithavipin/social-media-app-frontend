import React from 'react'
import { UilPen } from '@iconscout/react-unicons'
import './InfoCard.css'
import { useState } from 'react'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false)

    return (
        <div className='infocard'>
            <div className='infohead'>
                <span><b>Yours Info</b></span>
                <div className='pen'>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)}
                    />
                    <ProfileModal
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened} />
                </div>
            </div>
            <div className='info'>
                <span><b>Status</b></span>
                <span> In Relationship</span>
            </div>
            <div className='info'>
                <span><b>Lives in</b></span>
                <span> India</span>
            </div>
            <div className='info'>
                <span><b>Works at</b></span>
                <span> Infosys</span>
            </div>
            <button className='button logout'>Logout</button>

        </div>
    )
}

export default InfoCard
import React from 'react'
import Logosearch from '../Logosearch/Logosearch'
import Followerscard from '../Followerscard/Followerscard'
import InfoCard from '../InfoCard/InfoCard'
import '../Profileside/Profileside.css'
const ProfileLeft = () => {
    return (
        <div className='.profileside'>
            <Logosearch />
            <InfoCard/>
            <Followerscard />

        </div>
    )
}

export default ProfileLeft
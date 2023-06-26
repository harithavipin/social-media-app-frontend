import React from 'react'
import './Rightside.css'
import Trendcard from '../Trendcard/Trendcard'

import Home from '../../img/home.png'
import noti from '../../img/noti.png'
import comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'

const Rightside = () => {
    return (
        <div className='rightside'>
            <div className='navicons'>
                <img src={Home} alt='' />
                <img src={noti} alt='' />
                <UilSetting />
                <img src={comment} alt='' />

            </div>
            <Trendcard/>
            <button className='button sharebtn'>Share</button>
        </div>
    )
}

export default Rightside
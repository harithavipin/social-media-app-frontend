import React from 'react';
import Logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Logosearch.css';
import {UilSearch} from '@iconscout/react-unicons'

const Logosearch = () => {
    return (
        <div className='logosearch'>
            <img src={Logo} alt='' />
            <div className='search'>
                <input type='text' placeholder='#Explore' />
                <div className='s-icon'>
                    <UilSearch/>

                </div>

            </div>

        </div>
    )
}

export default Logosearch
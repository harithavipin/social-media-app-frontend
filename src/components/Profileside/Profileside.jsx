import React from 'react';
import Logosearch from '../Logosearch/Logosearch';
import Profilecard from '../Profilecard/Profilecard';
import './Profileside.css'
import Followerscard from '../Followerscard/Followerscard';

const Profileside = () => {
  return (
    <div className='profileside'>
      <Logosearch />
      <Profilecard />
      <Followerscard />
    </div>
  )
}

export default Profileside
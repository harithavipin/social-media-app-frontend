import React from 'react'
import './Trendcard.css'
import { trendData } from '../../Data/TrendcardData'

const Trendcard = () => {
    return (
        <div className='trendcard'>
            <h3>Trends for you</h3>
            {
                trendData.map((trend, id) => {
                    return (
                        <div className='trend'>
                            
                                <span>{trend.name}</span>

                            <span>#{trend.shares}</span></div>

                       
                    )
                })
            }
        </div>



    )
}

export default Trendcard

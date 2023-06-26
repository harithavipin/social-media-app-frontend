import React from 'react';
import './Followerscard.css';
import { followers } from '../../Data/FollowersData'
import { Button } from '@mantine/core';
const Followerscard = () => {
    return (
        <div className='followerscard'>
            <h4>Who Is Following You</h4>

            {
                followers.map((followers, id) => {
                    return (
                        <div className='follower'>
                            <div>
                                <img src={followers.img} alt='' className='followerimg'/>
                                <div className='followername'>
                                    <span>{followers.name}</span>
                                    <span>@{followers.username}</span>

                                </div>
                            </div>
                            <Button className='button first'>Follow</Button>
                        </div>

                    )
                }
                )
            }

        </div>
    )
}

export default Followerscard
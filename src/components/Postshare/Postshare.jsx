import React from 'react'
import { useState, useRef } from 'react'
import './Postshare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'

import { UilTimes } from '@iconscout/react-unicons'

import { UilLocationPoint } from '@iconscout/react-unicons'
import { Button } from '@mantine/core'



const Postshare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            })

        }
    }

    return (

        <div className='postshare'>
            <img src={ProfileImage} alt='' />
            <div className='postinput'>
                <input type='text' placeholder="What's happening" />
                <div className='postoptions'>
                    <div className='option' style={{ color: "var(--photo)" }}
                    onClick={()=>imageRef.current.click()
                    }

                    ><UilScenery />Photo</div>{" "}
                    <div className='option' style={{ color: "var(--video)" }}>
                        <UilPlayCircle />Video</div>{" "}
                    <div className='option' style={{ color: "var(--location)" }}><UilSchedule />Location</div>{" "}
                    <div className='option' style={{ color: "var(--schedule)" }}><UilLocationPoint />Schedule</div>
                    <Button className='button share'>Share</Button>
                    <div style={{ display: "none" }}>
                        <input type='file' name='myimage' ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className='previewImage'>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt='' />

                    </div>


                )}

            </div>



        </div>



    )
}

export default Postshare
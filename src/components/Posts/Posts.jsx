import React from 'react'
import './Posts.css'
import {postdata} from '../../Data/PostData'
import Post from '../Post/Post'


const Posts = () => {
  return (
    <div className='posts'>
{
    postdata.map((post,id)=>{
        return <Post data={post} id={id}/>
})
}
      
    </div>
  )
}

export default Posts
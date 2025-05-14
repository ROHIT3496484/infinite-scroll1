import React, {useEffect} from 'react'
import './infinitescroll.css'
const Post = ({data, setPageno}) => {
  useEffect(()=>{
    const observer = new IntersectionObserver((params)=>{
      if(params[0].isIntersecting){
        observer.unobserve(lastImage)
        setPageno((pageno)=> pageno + 1)
      }
    },
    {threshold: 0.5}
)
    const lastImage = document.querySelector(".img:last-child")
    if(!lastImage) return;
    observer.observe(lastImage)
    return()=>{
      if(lastImage) observer.unobserve(lastImage);// Unobserve the last image
      // This will prevent the observer from observing the last image again
      observer.disconnect();
      // Clean up the observer when the component unmounts
    }
  }, [data, setPageno])
  return (
    <div className='container'>
      {data.map((item)=>{
        return<img className="img" src={item.download_url}  key="item.id"  alt="img"/>
         
      })}
    </div>
  )
}

export default Post

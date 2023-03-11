import React from 'react'
import { useState } from 'react'



export default function Carousel(props) {
  //Props will contain an array called image with one cell to hold src string
  // and the secound cell holds the alt string.
  const [img,setImg] = useState(0);
  function NextImg(){
    img==props.images.length-1?setImg(0):setImg(img+1);
  }

  function PreviousImg(){
    img==0?setImg(props.images.length-1):setImg(img-1);
  }

  return (
  <div> 
    <img src={props.images[img][0]} alt={props.images[img][1]}/>
  </div>
  )
}

import React from 'react'
import { useState } from 'react';
import "./style.css"
export const Inp = () => {
  const [picture, setPicture] = useState("https://th.bing.com/th/id/OIP.ofBRoRjcJkMaeifFiGdr6QHaEK?w=327&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7");
  const onChangePicture = e => {
    console.log('picture: ', picture);
    setPicture(e.target.files[0]);
  };
  return (
    <div>
      <div className="inputimg"> 
      <img className="playerProfilePic_home_tile"  src={picture}></img>
        <input id="profilePic" className='submitbtn' type="file" onChange={onChangePicture}/>
      </div>
    </div>
  )
}

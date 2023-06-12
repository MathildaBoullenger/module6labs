import React, { useState } from 'react';
import happyEmoji from '../assets/happyEmoji.png'
import sadEmoji from '../assets/sadEmoji.png'

function Emoji() {
   const [mood, setMood] = useState(happyEmoji)

   const changeEmoji = () => {
    setMood(mood === happyEmoji ? sadEmoji : happyEmoji);
    }
  

   return (
   <div>
   <button onClick={changeEmoji}>Switch emoji</button>
   <img src={mood} className="Happy Emoji" alt="Happy Emoji" height="300"/>
   
   </div>
   );

 }

export default Emoji;
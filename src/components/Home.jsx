// this page will have an introduction to the app (Aurebesh?)
//! state
import { useState, useEffect } from 'react'


import star from './assets/Star.png'
import wars from './assets/Wars.png'
import sound from './assets/sounds/main-theme.mp3'

export default function Home() {

  const [animationComplete, setAnimationComplete] = useState(false)


  const handleAnimationEnd = () => {
    setAnimationComplete(true)
  }
  useEffect(() => {
    const audio = new Audio(sound);
    audio.loop = true; // Loop the sound

    const playAudio = () => {
      audio.play();
    };

    // Wait for the audio to be fully loaded before playing
    audio.addEventListener('canplaythrough', playAudio);

    // Clean up the event listener when the component unmounts
    return () => {
      audio.removeEventListener('canplaythrough', playAudio);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <container className="animation-container">
      <div className='starwars-demo'>
        <img
          src={star}
          alt='Star'
          className={`star ${animationComplete ? 'hidden' : ''}`}
          onAnimationEnd={handleAnimationEnd}
        />
        <img
          src={wars}
          alt='Wars'
          className={`wars ${animationComplete ? 'hidden' : ''}`}
          onAnimationEnd={handleAnimationEnd}
        />
        <h2 className='byline lead' id='byline'>A Gallery Far Far Away...</h2>
      </div>
    </container>
  )
}
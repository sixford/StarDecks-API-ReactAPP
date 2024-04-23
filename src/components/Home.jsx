// this page will have an introduction to the app (Aurebesh?)
//! state
import { useState } from 'react'

import star from './assets/Star.png'
import wars from './assets/Wars.png'

export default function Home() {

  const [animationComplete, setAnimationComplete] = useState(false)

  const handleAnimationEnd = () => {
    setAnimationComplete(true)
  }

  return (
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
  )
}
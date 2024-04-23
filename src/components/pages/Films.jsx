// this page will dispaly the 6 films in order from the API (day they were realeased)
// can click a button to sort chronologically 
// can filter by director.
// Package imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Bootstrap imports
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

// import images and add into object in function
import main1 from '../assets/mainImages/1.png'
import main2 from '../assets/mainImages/2.png'
import main3 from '../assets/mainImages/3.png'
import main4 from '../assets/mainImages/4.png'
import main5 from '../assets/mainImages/5.png'
import main6 from '../assets/mainImages/6.png'

// import sounds 
import woosh from '../assets/sounds/woosh.mp3'
import buttonClickSound from '../assets/sounds/blaster-firing.mp3'


export default function Films() {

  //! State
  const [films, setFilms] = useState([])
  const [error, setError] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)
  const arrowClickAudio = new Audio(woosh)
  const buttonClickAudio = new Audio(buttonClickSound)


  // //! images
  const mainImages = {
    1: main1,
    2: main2,
    3: main3,
    4: main4,
    5: main5,
    6: main6,
  }
  console.log(mainImages)

  //! Effects
  useEffect(() => {
    const getFilmData = async () => {
      try {
        const response = await axios.get('https://www.swapi.tech/api/films/')
        const filmsData = response.data.result
        setFilms(filmsData)
        // console.log(filmsData)
        // const titles = filmsData.map(film => film.properties.title)
        // setFilmTitles(titles)
        // console.log(titles)
      } catch (error) {
        setError(error.message)
      }
    }
    getFilmData()
  }, [])

  const handleCarouselSelect = (selectedIndex, e) => {
    setCarouselIndex(selectedIndex)
    arrowClickAudio.volume = 0.6
    // Play sound effect when carousel navigation occurs
    arrowClickAudio.play()
  }

  const handleButtonClick = () => {
    // Play sound effect when button is clicked
    buttonClickAudio.volume = 0.2
    buttonClickAudio.play()
  }

  return (
    <Container fluid className='text-center'>
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div>
          <Carousel activeIndex={carouselIndex} onSelect={handleCarouselSelect}>
            {films.map((film) => (
              <Carousel.Item key={film.uid}>
                <img
                  className='d-block w-100'
                  src={mainImages[film.uid]}
                  alt={`Image of ${film.properties.title}`}
                  style={{ height: '400px', width: 'auto', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3 className='title-font'>{film.properties.title}</h3>
                  <p>
                    <Link to={`/films/${film.uid}`} className='btn btn-brand button-font' onClick={handleButtonClick}>
                      View details
                    </Link>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  )
}


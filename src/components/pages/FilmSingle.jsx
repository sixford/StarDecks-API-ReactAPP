import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Bootstrap
import { Container, Row, Col, Spinner } from 'react-bootstrap'

// poster images
import poster1 from '../assets/posterImages/1.png'
import poster2 from '../assets/posterImages/2.png'
import poster3 from '../assets/posterImages/3.png'
import poster4 from '../assets/posterImages/4.png'
import poster5 from '../assets/posterImages/5.png'
import poster6 from '../assets/posterImages/6.png'


export default function FilmSingle() {
  // ! State
  const [film, setFilm] = useState()
  const [error, setError] = useState('')

  // ! Local Variables
  const { filmId } = useParams()
  console.log(filmId)

  //! images
  const posterImages = {
    1: poster1,
    2: poster2,
    3: poster3,
    4: poster4,
    5: poster5,
    6: poster6,
  }
  console.log(posterImages)


  // ! Effects
  useEffect(() => {
    async function getFilmData() {
      try {
        const { data } = await axios.get(`https://www.swapi.tech/api/films/${filmId}`)
        setFilm(data.result)
        console.log(data)
      } catch (error) {
        setError(error.message)
      }
    }
    getFilmData()
  }, [filmId])


  return (
    <div className="film-single">
      {film ?
        <Container className='my-4'>
          <Row>
            <Col sm={12} md={6}>
              <img
                src={posterImages[film.uid]}
                style={{ height: "100%", width: "100%" }}
              />
            </Col>
            <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
              <h1>{film.properties.title}</h1>
              <h2><span>Director: </span>{film.properties.director}</h2>
              <h2><span>Release Date: </span>{film.properties.release_date}</h2>
              <h2><span>Opening Crawl: </span>{film.properties.opening_crawl}</h2>
              <h2><span>Producer: </span>{film.properties.producer}</h2>
              <hr />
              <Link to="#" className='btn btn-brand'>Back to films</Link>
            </Col>
          </Row>
        </Container>
        :
        error ?
          <p className='text-danger'>{error}</p>
          :
          <Spinner className='mx-auto' animation="border" variant="secondary" />
      }
    </div>
  )
}


// const idData = data.result[0]._id
// const filmData = data.result[0].properties
// setId(idData)
// console.log(filmData)
// console.log(data.result[0]._id)
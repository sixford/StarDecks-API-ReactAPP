import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'


export default function FilmSingle() {
  // ! State
  const [film, setFilm] = useState() // This will be an object
  const [error, setError] = useState('')

  // ! Local Variables
  const { filmId } = useParams()


  // ! Effects
  // useEffect(() => {
  //   async function getFilmData() {
  //     try {
  //       const response = await axios.get('https://www.swapi.tech/api/films/')
  //       const filmData = response.data.result
  //       setFilm(filmData)
  //       console.log(response.data.results)
  //     } catch (error) {
  //       console.error('Error fetching film data:', error)
  //     }
  //   }
  //   getFilmData()
  // }, [])

  useEffect(() => {
    const getFilmData = async () => {
      try {
        const { data } = await axios.get(`https://www.swapi.tech/api/films/${filmId}`)
        setFilm(data)
        console.log(data.result._id)
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
            className='w-100' 
            src={`../assets/${film.uid}.png`} 
            style={{ height: "100px", width: "50%" }}
            />
          </Col>
          <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
            <h1>Film Title</h1>
            <h2><span>Director:</span> </h2>
            <h2><span>Release Date:</span></h2>
            <h2><span>Opening Crawl:</span></h2>
            <h2><span>Producer:</span></h2>
            <hr />
            <Link to="/events" className='btn btn-brand'>Back to events</Link>
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
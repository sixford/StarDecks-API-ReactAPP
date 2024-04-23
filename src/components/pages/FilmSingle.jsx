import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'


export default function FilmSingle() {
  // ! State
  const [film, setFilm] = useState([])
  const [error, setError] = useState('')

  // ! Local Variables
  const { filmId } = useParams()


  // ! Effects

  useEffect(() => {
    async function getFilmData(){
      try {
        const { data } = await axios.get('https://www.swapi.tech/api/films/')
        setFilm(data.results)
      } catch (error) {
        setError(error.message)
      }
    }
    getFilmData()
  }, [filmId])


  return (
    <div className="film-single">
      {film.length > 0 ? (
        film.map((filmItem, index) => (
          <Container key={index} className='my-4'>
            <Row>
              <Col sm={12} md={6}>
                <img
                  className='w-100'
                  src={`../assets/${filmItem.uid}.png`}
                  alt={filmItem.properties.title} // Added alt attribute
                  style={{ height: "100px", width: "50%" }}
                />
              </Col>
              <Col sm={12} md={6} className='d-flex flex-column justify-content-center'>
                <h1>{filmItem.properties.title}</h1>
                <h2><span>Director: </span>{filmItem.properties.director}</h2>
                <h2><span>Release Date: </span>{filmItem.properties.release_date}</h2>
                <h2><span>Opening Crawl: </span>{filmItem.properties.opening_crawl}</h2>
                <h2><span>Producer: </span>{filmItem.properties.producer}</h2>
                <hr />
                <Link to="#" className='btn btn-brand'>Back to films</Link>
              </Col>
            </Row>
          </Container>
        ))
      ) : (
        console.log(error)
      )}
    </div>
  );
}


// const idData = data.result[0]._id
// const filmData = data.result[0].properties
// setId(idData)
// console.log(filmData)
// console.log(data.result[0]._id)
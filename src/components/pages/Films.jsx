// this page will dispaly the 6 films in order from the API (day they were realeased)
// can click a button to sort chronologically 
// can filter by director.
// Package imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

export default function Films() {

  //! State
  const [films, setFilms] = useState([])
  const [error, setError] = useState('')
  const [filmTitles, setFilmTitles] = useState([])

  //! Effects
  useEffect(() => {
    const getFilmData = async () => {
      try {
        const response = await axios.get('https://www.swapi.tech/api/films/')
        const filmsData = response.data.result;
        setFilms(filmsData);
        console.log(filmsData)
        const titles = filmsData.map(film => film.properties.title)
        setFilmTitles(titles)
        console.log(titles)
      } catch (error) {
        console.error('Error fetching film data:', error)
      }
    }
    getFilmData()
  }, [])

  return (
    <>
      <h1 className='text-center my-4'>Films</h1>
      <Container fluid className='text-center'>
        <Row>
          {films.length > 0 ?
            films.map(film => {
              const { uid, titles } = film
              console.log(uid, titles)
              return (
                <Col className = 'mb-4' key = { uid } xs = { 12} sm = { 6} md = { 4} lg = { 3}>
                  <Card className='h-100'>
                    <Card.Img variant="top" src={'image here'} />
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{'title here'}</Card.Title>
                      <Card.Text>
                        Location: <br />
                        Date:
                      </Card.Text>
                      <Link to={``} className='btn btn-brand mt-auto'>View details</Link>
                    </Card.Body>
                  </Card>
          </Col>
        )
            })
        :
        console.log('hola')
          }
      </Row>
    </Container >
    </>
  )
}
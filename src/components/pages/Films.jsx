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

// import images and add into object in function
import poster1 from '../assets/posterImages/1.png'
import poster2 from '../assets/posterImages/2.png'
import poster3 from '../assets/posterImages/3.png'
import poster4 from '../assets/posterImages/4.png'
import poster5 from '../assets/posterImages/5.png'
import poster6 from '../assets/posterImages/6.png'



export default function Films() {

  //! State
  const [films, setFilms] = useState([])
  const [error, setError] = useState('')


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

  return (
    <>
      <h1 className='text-center my-4'>Films</h1>
      <Container fluid className='text-center'>
        <Row>
          {films.length > 0 ?
            films.map(film => {
              const { uid } = film
              console.log(uid)
              return (
                <Col className='mb-4' key={film.uid} xs={12} sm={9} md={6} lg={4}>
                  <Card className='h-100'>
                    <Card.Img
                      variant="top"
                      src={posterImages[film.uid]}
                      style={{ height: "100%", width: "50%" }}
                    />
                    <Card.Body className='d-flex flex-column'>
                      <Card.Title>{film.properties.title}</Card.Title>
                      <Link to={`/films/${uid}`} className='btn btn-brand mt-auto'>View details</Link>
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
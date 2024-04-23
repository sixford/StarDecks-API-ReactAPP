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




export default function Films() {

  //! State
  const [films, setFilms] = useState([])
  const [error, setError] = useState('')


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


  return (
    <Container fluid className='text-center'>
      <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div>
          <Carousel>
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
                    <Link to={`/films/${film.uid}`} className='btn btn-brand button-font'>
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



// <>
// <h1 className='text-center my-4'>Films</h1>
// <Container fluid className='text-center'>
//   <Row>
//     {films.length > 0 ?
//       films.map(film => {
//         const { uid } = film
//         console.log(uid)
//         return (
//           <Col className='mb-4' key={film.uid} xs={12} sm={9} md={6} lg={4}>
//             <Card className='h-100'>
//               <Card.Img
//                 variant="top"
//                 src={mainImages[film.uid]}
//                 style={{ height: "100%", width: "50%" }}
//               />
//               <Card.Body className='d-flex flex-column'>
//                 <Card.Title>{film.properties.title}</Card.Title>
//                 <Link to={`/films/${uid}`} className='btn btn-brand mt-auto'>View details</Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         )
//       })
//       :
//       console.log('hola')
//     }
//   </Row>
// </Container >
// </>
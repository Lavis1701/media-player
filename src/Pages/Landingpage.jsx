import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row ClassName="mt-5 align-items-center justify-content-between w-100">
        <Col></Col>
        <Col lg={5}>
          <h1 className='fw-bolder mt-5 ' style={{ fontSize: '50px ' }}>Welcome to <span className='text-success'>Media-Player</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quidem animi. Officia eius neque non a, nam corrupti nesciunt, ipsa similique animi est consequatur fugit at dolores illum ab beatae.</p>
          <button onClick={() => navigateByUrl('/home')} className='btn btn-success  fw-bold mt-4'>Get started</button>
        </Col>
        <Col>
          <img width='400px' src="https://cdn-icons-gif.flaticon.com/11974/11974883.gif" alt="" />
        </Col>
        <Col></Col>
      </Row>
      <div className='Container mb-5  mt-5 d-flex align-items-center justify-content-center flex-colum'>
        <h3 className='fs-1 fw-bolder'>FEATURES</h3>
      </div>
      <div className='d-flex justify-content-evenly'>
        <Card style={{ width: '270px', height: '450px' }}>
          <Card.Img variant="top" src="https://img.freepik.com/free-vector/video-design-abstract-concept-illustration_335657-3820.jpg?ga=GA1.1.1031356820.1727328524&semt=ais_hybrid" />
          <Card.Body>
            <Card.Title>Play Everything</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '270px', height: '450px' }}>
          <Card.Img variant="top" src="https://img.freepik.com/free-vector/video-tutorial-watching-online-lecture-internet-course-digital-lesson-tutor-cartoon-character-video-call-seminar-remote-education_335657-774.jpg?ga=GA1.1.1031356820.1727328524&semt=ais_hybrid" />
          <Card.Body>
            <Card.Title>Managing Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '270px', height: '450px' }}>
          <Card.Img variant="top" src="https://img.freepik.com/free-vector/how-videos-abstract-concept-illustration_335657-3680.jpg?ga=GA1.1.1031356820.1727328524&semt=ais_hybrid" />
          <Card.Body>
            <Card.Title>Customised Videos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-"100"'>
        <div className='col-lg-5'>
          <h4 className='text-dark fs-2 fw-bold'>Simple,Powerful and Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-success fs-5 fw-bolder '>Play Everything</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam inventore, quia nesciunt error eaque laudantium explicabo dolorum sit, ad aperiam eveniet dolor, totam itaque distinctio debitis quae temporibus culpa.
            Tempore totam, deleniti odit labore ratione ullam. Enim libero excepturi dicta quas aut ut. Illum esse error, sapiente, aut eaque reiciendis quidem unde alias amet porro numquam non pariatur eveniet?</h6>
          <h6 className='mb-5 mt-3'><span className='text-success fs-5 fw-bolder '>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam inventore, quia nesciunt error eaque laudantium explicabo dolorum sit, ad aperiam eveniet dolor, totam itaque distinctio debitis quae temporibus culpa.
            Tempore totam, deleniti odit labore ratione ullam. Enim libero excepturi dicta quas aut ut. Illum esse error, sapiente, aut eaque reiciendis quidem unde alias amet porro numquam non pariatur eveniet?</h6>
          <h6 className='mb-5 mt-3'><span className='text-success fs-5 fw-bolder '>Play Everything</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam inventore, quia nesciunt error eaque laudantium explicabo dolorum sit, ad aperiam eveniet dolor, totam itaque distinctio debitis quae temporibus culpa.
            Tempore totam, deleniti odit labore ratione ullam. Enim libero excepturi dicta quas aut ut. Illum esse error, sapiente, aut eaque reiciendis quidem unde alias amet porro numquam non pariatur eveniet?</h6>
        </div>
        <div className="video col-lg-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/v_SLNFmg2lc?si=b_XbxAGkGl1ntMu3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>
  )
}

export default Landingpage

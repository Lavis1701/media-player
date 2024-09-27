import React from 'react'
import {Navbar,Container} from 'react-bootstrap';

function Header() {
  return (
    <div>
     <Navbar className="bg-body-info">
        <Container>
          <Navbar.Brand href="#home" className='text-dark fw-bolder fs-5'>
          <img width = '29px'src="https://cdn-icons-png.flaticon.com/512/888/888881.png" alt="" />
          <span></span> MEDIA PLAYER
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

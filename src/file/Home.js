import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant='dark' expand="md">
        <Container fluid>
          <Navbar.Brand className='title' href="#home"><b style={{ color: '#dce22f' }}>طراح سایت</b> و <b style={{ color: '#3c2fe2' }}>برنامه نویس</b></Navbar.Brand>
          <Navbar.Toggle className='navtogel' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#nemoone" className='navb'>نمونه کارها</Nav.Link>
              <Nav.Link href="#link" className='navb'>سفارش پروژه </Nav.Link>
              <Nav.Link href="#link" className='navb'>درباره من</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* SafheHome Header*/}

      <Container fluid className='imagepass'>

        <Row>
          <Col >
            <div className='text'>
              <h5>عبدالله چلاسی</h5>
              <Typewriter
                onInit={(typewriter) => {

                  typewriter
                    .pauseFor(1000)
                    .typeString('<span style="color: #27ae60;">من طراح سایت و برنامه نویس موبایل هستم</span>')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('<span style="color: #186518"> بهترین خدمات طراحی سایت های  شخصی , خبری , رستوران , ورزشی و گردشگری با بهترین کیفیت در کمترین زمان </span>')
                    .start()
                }}
              />
            </div>



          </Col>
        </Row>

      </Container>


      


      {/* Project */}
      <Container fluid className='home'>


        <Container fluid className='nemoonehweb'>
          <Row>
          <Col sm={12} className='nemonekar' id='nemoone'>
              <h1> وبسایت</h1><hr />
            </Col>
            

            <Col xm={6} className='colweb'>
              
                <div className='web' >
                <a className='linkk' target={'#'} href='http://electriciabdollah.ir' >

                  <img className='imgweb1'/>
                  <p>الکتریکی عبدالله</p>
                  </a>
                </div>
                
                
              
            </Col>


            <Col xm={6}>
              

                <div className='web'>
                <a className='linkk' target={'#'} href='http://jazire.ir' >

                <img className='imgweb2' />
                <p>آموزشگاه جزیره - قشم</p>
                </a>
                
                
              </div>
              
            </Col>

          </Row>


        </Container>




        

        <Container fluid className='nemoonehmobile'>
          <Row>

          <Col sm={12} className='nemonekar' id='nemoone'>
              <h1> موبایل</h1><hr />
            </Col>

            <Col sm={3}>
              
                <div className='mobile'>

                <img className='imgmob1' />
                <p>ساخت بازی</p>
                </div>
              
            </Col>


            <Col sm={3}>
              
                <div className='mobile'>
                <img className='imgmob2' />
                <p>ماریو قشمی</p>

                </div>
              
            </Col>

            <Col sm={3}>
              
                <div className='mobile'>
                <img className='imgmob3' />
                <p>ساخت بازی 2</p>

                </div>
              
            </Col>

            <Col sm={12}>
              <div className='app'>
                <a target={'#'} href='https://myket.ir/developer/dev-46469'>
                <h2>دیگر برنامه ها</h2>
                </a>
              </div>
            </Col>

            

          </Row>


        </Container>



                <Container>
                <Row>
                  <Col md={12}>
                  Hi
                  </Col>
                  <Col>HI</Col>
                </Row>
                </Container>



      </Container>

    </>
  )
}

export default Home

import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import abdollah from '../image/a.jpg'
import whatsapp from '../image/whatsapp.png'
import insta from '../image/instaa.png'
import tel from '../image/tel.png'
import devs from '../image/devs.png'

function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant='dark' expand="md">
        <Container fluid>
          <Navbar.Brand><img width={50} src={devs} /></Navbar.Brand>
          <Navbar.Brand className='title' href="#home"><b style={{ color: '#dce22f' }}>طراح سایت</b> و <b style={{ color: '#3c2fe2' }}>برنامه نویس</b></Navbar.Brand>
          <Navbar.Toggle className='navtogel' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#nemoone" className='navb'>نمونه کارها</Nav.Link>
              <Nav.Link href="#call" className='navb'>سفارش پروژه </Nav.Link>
              <Nav.Link href="#dev" className='navb'>درباره من</Nav.Link>

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

        <Row>
          <Col sm={8}>
            <Container fluid className='nemoonehweb'>
              <Row>
                <Col sm={12} className='nemonekar' id='nemoone'>
                  <h1> وبسایت</h1><hr />
                </Col>


                <Col xm={6} className='colweb'>

                  <div className='web' >
                    <a className='linkk' target={'#'} href='http://electriciabdollah.ir' >

                      <img className='imgweb1' />
                      <p>الکتریکی عبدالله</p>
                    </a>
                  </div>



                </Col>


                <Col xm={6}>


                  <div className='web'>
                    <a className='linkk' target={'#'} href='http://amoozeshgahjazire.ir' >

                      <img className='imgweb2' />
                      <p>آموزشگاه جزیره - قشم</p>
                    </a>


                  </div>

                </Col>

              </Row>


            </Container>
          </Col>

          <Col sm={4}>


            <Container fluid className='nemoonehmobile'>
              <Row>

                <Col sm={12} className='nemonekar' id='nemoone'>
                  <h1> موبایل</h1><hr />
                </Col>

                <Col sm={12} xl={6}>

                  <div className='mobile'>

                    <img className='imgmob1' />
                    <p>ساخت بازی</p>
                  </div>

                </Col>


                <Col sm={12} xl={6}>

                  <div className='mobile'>
                    <img className='imgmob2' />
                    <p>ماریو قشمی</p>

                  </div>

                </Col>

                <Col sm={12}>

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
          </Col>
        </Row>






        <Container>
          <Row>

            <Col md={12}>
              <div className='dev' id='dev'>
                <img className='abdol' width={90} src={abdollah} />
                <p className='tarah'>طراح و برنامه نویس :<p className='abdollah'>عبدالله چلاسی</p></p>

                <p className='txtabdol'>
                  من متولد 1373 قشم - روستای گربدان هستم که در زمینه طراحی وب , دسکتاپ و برنامه نویسی موبایل فعالیت دارم و به صورت آزاد یا همون فریلنسینگ کار میکنم, یکی از اتفاقات جالب زندگیم اینه که تفریحم و شغلم یکی هستند و اونم چیزی نیست جز توسعه وب و اپلیکیشن , این داستان از سال 1391 شروع شد که به سمت تکنولوژی و دنیای برنامه نویسی پا گذاشتم همچنان این سابقه با گذر زمان همچنان بیشتر و بیشتر میشه، چون برنامه نویسی چیزی هست که من باهاش دنیا رو می بینم، می سنجم و حس میکنم،و سعی ام بر این است که با همین روند پیش برم و روز به روز با تکنولوژی های جدید دنیای برنامه نویسی کار کنم و تجربیات جدیدی کسب کنم
                </p>
              </div>
            </Col>


          </Row>
        </Container>

      </Container>


      {/* Call */}
      <Container className='call' id='call' fluid>
        <Row>
          <Col md={12}>
            <div >
              <h4>ارتباط با من</h4><hr />
            </div>
          </Col>

          <Col className='cl' md={4}>
            <a href='https://api.whatsapp.com/send?phone=09335825325' target={'#'}>
              <img src={whatsapp} className='insta' />
            </a>
          </Col>


          <Col className='cl' md={4}>
            <a target={'#'} href='https://www.instagram.com/abdollahchelasi/'>
              <img src={insta} className='insta' />
            </a>

          </Col>

          <Col className='cl' md={4}>
            <a target={'#'} href='https://telegram.me/abdollah_chelasi'>
              <img src={tel} className='insta' />
            </a>
          </Col>

          <Col className='tamas' md={12}>
            <p>شماره تماس : </p>
            <h3 className='cl2'>09335825325</h3>
          </Col>

          <Col className='developer' md={12}>
            <p className='pp'>طراح و برنامه نویس : عبدالله چلاسی</p>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Home

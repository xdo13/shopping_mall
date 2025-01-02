import { Container, Nav, Navbar } from 'react-bootstrap';
import data from './db/shoes';
import { useState } from 'react';
import Products from './components/Products.jsx';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Detail from './components/Detail.jsx';


function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/Cart')}}>Cart</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/About')}}>About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* <Link to="/">홈</Link>
        <Link to="/detail">상세페이지</Link> */}
        <Routes>
          {/* <Route path="/" element={<div><div className="slider"></div>
              <div className="container">
                <div className="row">
                  {
                    shoes.map((a, i) => {
                      return (
                        <Products shoes={shoes[i]} i={i} key={data[i].id} />
                      )
                    })
                  }
                  </div>
                  </div></div>} /> */}
          <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/About/member" element={<Member/>} />
          <Route path="/About/location" element={<Location/>} />
          {/* <Route path="*" element={<div>없는 페이지입니다.</div>} /> */}
        </Routes>
        <div className='slider'></div>
        <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
          {
            shoes.map((ele,i)=>{
              return(
                <Products shoes={shoes[i]} i={i} key={data[i].id} />
              )
          })
        }
        <div className="col-md-4">
              <img src="/img/shoes1.jpg" width="80%" />
              <h4>{ shoes[0].title }</h4>
              <p>{ shoes[0].price }</p>
            </div>

            <div className="col-md-4">
              <img src="/img/shoes2.jpg" width="80%" />
              <h4>{ shoes[1].title }</h4>
              <p>{ shoes[1].price }</p>
            </div>

            <div className="col-md-4">
              <img src="/img/shoes3.jpg" width="80%" />
              <h4>{ shoes[2].title }</h4>
              <p>{ shoes[2].price }</p>
            </div>
         </div>
         </div>
      </>
      
      <div className="row">
        <div className="col-md-4">
            <img src="/img/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
        <div className="col-md-4">
            <img src="/img/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
        <div className="col-md-4">
            <img src="/img/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
        </div>
      </div>
    </div>
   
  );
}
function About(){
  return(
    <>
      <h4>회사정보임</h4>
    </>
  );
}

function Member(){
  return (
    <>
      <h4>Member</h4>
    </>
  );
}
function Location(){
  return(
    <>
      <h4>Location</h4>
    </>
  )
}
export default App;

import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import data from './db/shoes';
import { useState } from 'react';
import Products from './components/Products.jsx';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Detail from './components/Detail.jsx';
import Title from './components/Title.jsx'
import Title2 from './components/Title2.jsx'
import inike from "./db/inike.js"
import ComNike from './components/ComNike.jsx';
import Footer from './components/Footer.jsx';
import axios from 'axios'
import Cart from "./components/Cart.jsx";


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [nike, setNike] = useState(inike);
  let [count, setCount] = useState(1);

  return (
    <div className='App'>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">슈마커</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
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
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/About/member" element={<Member/>} />
          <Route path="/About/location" element={<Location/>} />
          {/* <Route path="*" element={<div>없는 페이지입니다.</div>} /> */}
        </Routes>
        <div className='slider'></div>
        <Title/>
        <div className="container" style={{marginTop:'30px'}}>
        <div className="row">
        <Button variant='outline-success' count = {count} onClick={() => {
                 
                 if(count==1){
                   axios.get('https://dino-21.github.io/react_data/nike2.json').then((result)=>{
                       let copy10 =[...nike, ...result.data];
                       setNike(copy10);
                       setCount(count + 1);
              
                 })}else if(count==2){
                   axios.get('https://dino-21.github.io/react_data/nike3.json').then((result)=>{
                     let copy11 =[...nike, ...result.data];
                     setNike(copy11);
                     setCount(count + 1);
                    })   
                 }
      
                 if(count===3){
                   alert("더이상 상품이 없습니다.");  
                 }
      }}>+ 3개 상품 더 보기</Button>{' '}
            {nike.map((ele, i) => {
                  return <ComNike nike={nike[i]} key={nike[i].id} />;
        })}
          <div style={{textAlign: "center"}}>
            <Title2/>
            
       
            <Button variant='outline-primary' onClick={()=>{
              let copy3 = [...shoes].sort((a, b) =>
                a.title > b.title ? 1 : -1,
            );
            setShoes(copy3);
            }}>이름순 정렬</Button>{" "}
            <Button variant='outline-secondary' onClick={()=>{
              let copy4 = [...shoes].sort((a,b)=>
              a.price > b.price ? 1 : -1,
            );
            setShoes(copy4);
            }}>낮은가격순 정렬</Button>{" "}
            <Button variant='outline-success' onClick={()=>{
              let copy5 = [...shoes].sort((a,b)=>
              b.price > a.price ? 1: -1,
            );
            setShoes(copy5);
            }}>높은가격순 정렬</Button>{" "}
            
          </div>
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
         <Footer/>
      </>
      
      {/* <div className="row">
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
      </div> */}
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

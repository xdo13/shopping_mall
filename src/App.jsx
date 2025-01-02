import { Container, Nav, Navbar } from 'react-bootstrap';


function App() {
  return (
    <div className='App'>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className='slider'></div>
        <div className="container">
        <div className="row">
        <div className="col-md-4">1</div>
        <div className="col-md-4">2</div>
        <div className="col-md-4">3</div>
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
export default App;

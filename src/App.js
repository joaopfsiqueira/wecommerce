import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';


function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand href="/">Amazon</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
        </Container>
      </main>
      
    </div>
    </BrowserRouter>
  );

}

export default App;

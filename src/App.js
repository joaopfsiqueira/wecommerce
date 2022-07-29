import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import data from './data';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <Link to="/">Amazon</Link>
      </header>

      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </main>

    </div>
    </BrowserRouter>
  );

}

export default App;

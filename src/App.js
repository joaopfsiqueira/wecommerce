import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import data from './data';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header >
        <a href="/">Amazon</a>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </main>

    </div>
    </BrowserRouter>
  );

}

export default App;

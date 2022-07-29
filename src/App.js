import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header >
        <a href="/">Amazon</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {
          data.products.map(product => (
            <div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            </div>
          ))
        }
      </main>
    </div>
  );
}

export default App;

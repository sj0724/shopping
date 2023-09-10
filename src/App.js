import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default App;
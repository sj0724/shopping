import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;

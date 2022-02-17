import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
        <Route path='/cart/:id' element={<CartScreen />} />
        <Route path='/carto' element={<CartScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductAdd from './components/ProductAdd';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/create'exact element={<ProductAdd />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

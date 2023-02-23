import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Home/>/>
        <Route path='/home' element=<Home/>/>
        <Route path='/about' element=<About/>/>
        <Route path='/products' element=<Products/>/>
        <Route path='/contact' element=<Contact/> />

        <Route path='*' element={<Navigate to='/home'/>}/>

      </Routes>
    </BrowserRouter>
  </div>
}

export default App;

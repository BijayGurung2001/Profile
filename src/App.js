import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Message from './Components/Message';
import Testimonial from './Pages/Testimonial';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/message' element={<Message/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/details' element={<Footer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

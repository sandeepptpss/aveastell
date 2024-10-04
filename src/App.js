import './App.css';
import './assets/custom.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import User from './components/User';
import Home from './components/Home';
import PreviewImg from './components/PreviewImage';
import Footer from './components/Footer';
import Nav from './components/Nav';
import NoPage from './components/NoPage';
function App() {
 return (
 <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>

    <Route path="/" element={<Home/>}/>

    <Route path="/preview" element={<PreviewImg />} />
    <Route path="/user" element={<User />}/>
    <Route path="*" element={<NoPage />} />
    </Routes>

    <Footer />
    </BrowserRouter>


   </div>
 );
}
export default App;

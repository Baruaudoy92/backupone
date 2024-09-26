import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from '../src/contact/store';
import Header from './pages/Header';
import Login from './pages/Login';
import Footer from './pages/Footer';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import AboutUs from './pages/Aboutus';
import MangaPage from './pages/Mangapage';
import News from './pages/News';
import Admin from './pages/Admin';
import ModifyManga from './pages/Modifymanga';
import AddManga from './pages/Addmanga';
import ProduitManga from './pages/Produitmanga';
import ContactPage from './pages/ContactPage'; 
import Modifyuser from './pages/Modifyuser';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <div>
          <Header />
          <Routes>
            {/* Redirect root path to the home page */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mangapage" element={<MangaPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} /> 
            <Route path="/addmanga" element={<AddManga />} /> 
            <Route path="/modifymanga/:id" element={<ModifyManga />} /> 
            <Route path="/modifyuser/:id" element={<Modifyuser />} />
            <Route path="/produitmanga/:id" element={<ProduitManga />} /> 
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
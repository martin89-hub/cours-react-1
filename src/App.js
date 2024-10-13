import React from 'react';
import { BrowserRouter , Route, Routes, } from 'react-router-dom';


// Import des pages
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import Realisations from './pages/Realisations';
import './css/app.css';

// Import du footer et du header
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Header ou Navigation */}
        <Header />

        {/* Contenu principal de l'application */}
        <div className="content">
          <Routes>
            <Route  path="/" exact Component={Home} />
            <Route path="/services" Component={Services} />
            <Route path="/realisations" Component={Realisations} />
            <Route path="/blog" Component={Blog} />
            <Route path="/legal" Component={Legal} />
            <Route path="/contact" Component={Contact} />
        
          </Routes>
        </div>

        {/* Footer en dehors des routes mais dans l'élément principal */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

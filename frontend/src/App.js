import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Favoritos from './pages/Favoritos';
import Detalhes from './pages/Detalhes';
import './App.css';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setUsuarioLogado(!!token);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Header usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUsuarioLogado={setUsuarioLogado} />} />
            <Route path="/cadastro" element={<Register setUsuarioLogado={setUsuarioLogado} />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/detalhes/:id" element={<Detalhes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

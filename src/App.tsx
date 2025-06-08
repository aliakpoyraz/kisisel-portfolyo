import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';

import AnaSayfa from './pages/AnaSayfa';
import Portfolyo from './pages/Portfolyo';
import Hakkimda from './pages/Hakkimda';
import Iletisim from './pages/Iletisim';
import ProjectDetail from './pages/ProjeDetay';

function App() {
  return (
    <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AnaSayfa />} />
            <Route path="/portfolyo" element={<Portfolyo />} />
            <Route path="/hakkimda" element={<Hakkimda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/portfolyo/:id" element={<ProjectDetail />} />
          </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
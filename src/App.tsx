import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import Employee from './components/Employee';
import NotFound from './components/NotFound';

// Styles
import { GlobalStyle } from './GlobalStyles';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:employeeId' element={<Employee />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

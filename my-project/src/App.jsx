import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Time from './client/components/time/time';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Time counter={30} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

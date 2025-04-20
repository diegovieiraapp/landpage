import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HomePage />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
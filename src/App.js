import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Layout/>
      <Button variant="danger">Teste </Button>
      <Footer/>
    </>
  );
}

export default App;

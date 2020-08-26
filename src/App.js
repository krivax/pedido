import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import { NoMatch } from './pages/NoMatch';
import  Cart from './pages/Cart';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Cart}/>
            <Route component={NoMatch}/>
          </Switch>
        </Layout>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

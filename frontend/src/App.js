import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './screens/HomePage';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Nordic shop</h1>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;

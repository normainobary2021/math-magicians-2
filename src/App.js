import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="quote" element={<Quote />} />
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
        </Routes>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route} from 'react-router-dom';
import Movix from './components/pages/works/Movix';
import KRH from './components/pages/works/KRH';
import Marketing from './components/pages/works/Marketing';
import CompanySearch from './components/pages/works/CompanySearch';

class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className='App'>
          <Nav />
          <Route component={ScrollToTop} />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/works' component={WorkRoutes} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


const WorkRoutes = () => (
  <div>
    <Route path='/works/yrityshaku' component={CompanySearch} />
    <Route path='/works/marketing' component={Marketing} />
    <Route path='/works/krh' component={KRH} />
    <Route path='/works/movix' component={Movix} />
  </div>
);

export default App;

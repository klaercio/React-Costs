import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Contact from './components/Pages/Contact.js';
import Company from './components/Pages/Company.js';
import NewProject from './components/Pages/NewProject.js';
import Container from './components/layouts/Container.js';
import NavBar from './components/layouts/NavBar.js';
import Footer from './components/layouts/Footer.js'
import Projects from './components/Pages/Projects.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/NewProject' element={<NewProject/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Container>  
      <Footer/>
    </Router>
  );
}

export default App;

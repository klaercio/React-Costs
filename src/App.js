import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Contact from './components/Pages/Contact.js';
import Company from './components/Pages/Company.js';
import NewProject from './components/Pages/NewProject.js';
import Container from './components/layouts/Container.js';


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contato</Link>
        <Link to="/Company">Empresa</Link>
        <Link to="/NewProject">Novo Projeto</Link>
      </ul>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/NewProject' element={<NewProject/>}/>
        </Routes>
      </Container>  
      <footer>Footer</footer>
    </Router>
  );
}

export default App;

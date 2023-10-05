import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from './pages/Apresentacao';
import Container from './components/layaut/Container';
import Navbar from './components/layaut/Navbar';
import FormCadastroCantina from './pages/cadastro_login/FormCadastroCantina';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Cadastro from './pages/cadastro_login/Cadastro';
import Login from './pages/cadastro_login/Login';

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min_height">
        <Routes>
          <Route path='/' element={<Apresentacao/>}/>
          <Route path='/FormCadastroCantina' element={<FormCadastroCantina/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Checklist from './components/Checklist';
import Places from './components/Places';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/checklist' element={<Checklist/>}/>
        <Route exact path='/places' element={<Places/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

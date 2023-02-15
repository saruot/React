import logo from './logo.svg';
import './App.css';
import Cocktail from './cocktail';
import { Router, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Cocktail/>}></Route>
    </Routes>
  );
}

export default App;

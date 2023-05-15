import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import HomePage from './components/HomePage';
import SearchRes from './components/SearchRes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchres" element={<SearchRes />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

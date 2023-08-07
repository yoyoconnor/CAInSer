import './App.css';
import HomePage from './components/HomePage';
import SearchRes from './components/SearchRes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationForm from './components/ApplicationForm';
function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/searchres" element={<SearchRes />} />
        <Route
          path="/applicationForm/:jobName"
          element={
            <ApplicationForm jobId="1234" jobDescription="this is a cool job" />
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;

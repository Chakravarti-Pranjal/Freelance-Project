import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Employer from './pages/Employer';
import JobOpportunities from './pages/JobOpportunities';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/job" element={<JobOpportunities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
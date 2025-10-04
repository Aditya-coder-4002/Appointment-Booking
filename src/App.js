import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Mid from './components/Mid';
import Mid2 from './components/Mid2';
import Detail from './components/Detail';
import Footer from './components/Footer';
import About from './components/About';
import Page1 from './components/Page1';
import DoctorPage from './components/doctor';
import PatientPage from './components/PatientPage'; // <- new name
import BookAppointment from './components/BookAppointment';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Mid />
                <Mid2 />
                <Detail />
                <Footer />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/patient" element={<PatientPage />} /> 
          <Route path="/book-appointment/:id" element={<BookAppointment />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
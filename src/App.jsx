import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import MentorDirectory from './pages/MentorDirectory';
import MentorProfile from './pages/MentorProfile';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Booking from './pages/Booking';
import Reviews from './pages/Reviews';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const hideFooter = pathname === '/dashboard';

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mentors" element={<MentorDirectory />} />
          <Route path="/mentor/:id" element={<MentorProfile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking/:mentorId" element={<Booking />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

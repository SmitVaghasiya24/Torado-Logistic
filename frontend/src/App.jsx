import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from './pages/Home';
import Layout from './components/Layout';
import GetQuote from './pages/GetQuote';
import Contact from './pages/Contact';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/Blog/BlogDetails';
import Service from './pages/Service/Service';
import ServiceDetails from './pages/Service/ServiceDetails';
import Faq from './pages/Page/Faq';
import TrackingShipment from './pages/Page/TrackingShipment';
import Error from './pages/Page/Error';
import PrivacyPolicy from './pages/Page/PrivacyPolicy';
import TermsCondition from './pages/Page/Terms&Con';
import Project from './pages/Project/Project';

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster
        richColors
        position="top-right"
        duration={3000}
        closeButton
      />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  element={<Home />} />
            <Route path='/request-quote'  element={<GetQuote />} />
            <Route path='/contact'  element={<Contact />} />
            <Route path='/our-blog'  element={<Blog />} />
            <Route path='/blog/:slug'  element={<BlogDetails />} />
            <Route path='/services'  element={<Service />} />
            <Route path='/services/:slug'  element={<ServiceDetails />} />
            <Route path='/faq'  element={<Faq />} />
            <Route path='/tracking-shipment'  element={<TrackingShipment />} />
            <Route path='/404'  element={<Error />} />
            <Route path='/privacy-policy'  element={<PrivacyPolicy />} />
            <Route path='/terms-conditions'  element={<TermsCondition />} />
            <Route path='/projects'  element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

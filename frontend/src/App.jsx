import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from './pages/Home';
import Layout from './components/Layout';
import GetQuote from './pages/GetQuote';

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

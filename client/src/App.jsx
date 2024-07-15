import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" elemen={<Home />} />
        <Route path="/" elemen={<Home />} />
        <Route path="/" elemen={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

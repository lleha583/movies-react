import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Movies from "./page/Movies/Movies";
import Contact from "./page/Contact";
import MoviePage from "./page/MoviePage/MoviePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;

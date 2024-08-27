import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <div id="detail">
      <Outlet />
    </div>
    <Footer />
    </>
  );
}

export default App;

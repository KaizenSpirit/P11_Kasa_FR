import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home.js"
import About from "./pages/About/About.js"
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import CardDetails from "./pages/CardDetails/CardDetails.js"
import Error404 from "./pages/Error404/Error404.js";

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<CardDetails />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;

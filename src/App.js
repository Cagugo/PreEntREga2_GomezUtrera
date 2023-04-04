import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import UserDetail from "./pages/UserDetail/UserDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

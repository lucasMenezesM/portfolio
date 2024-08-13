import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

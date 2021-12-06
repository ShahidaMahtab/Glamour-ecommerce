import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/Home/About/About";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import CartProvider from "./context/CartProvider";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About nav={true} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </AuthProvider>
      </CartProvider>
    </div>
  );
}

export default App;

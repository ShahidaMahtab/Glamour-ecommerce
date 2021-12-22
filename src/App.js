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
import { SnackbarProvider } from "notistack";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} style={{ background: "#009634" }}>
        <CartProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About nav={true} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/productDetails/:productid"
                  element={<ProductDetail />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                >
                  <Route path="/dashboard/myOrders" element={<MyOrders />} />
                </Route>
              </Routes>
            </Router>
          </AuthProvider>
        </CartProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;

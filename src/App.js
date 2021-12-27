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
import AddReviews from "./Pages/Dashboard/AddReviews/AddReviews";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SnackbarProvider maxSnack={3} style={{ background: "#009634" }}>
          <CartProvider>
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
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="/dashboard/myOrders" element={<MyOrders />} />
                  <Route
                    path="/dashboard/addReviews"
                    element={<AddReviews />}
                  />
                  <Route
                    path="/dashboard/makeAdmin"
                    element={
                      <AdminRoute>
                        <MakeAdmin />
                      </AdminRoute>
                    }
                  />
                </Route>
              </Routes>
            </Router>
          </CartProvider>
        </SnackbarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
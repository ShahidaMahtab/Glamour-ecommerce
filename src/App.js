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

import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import Payment from "./Pages/Dashboard/Payment/Payment";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";

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
                    path="/dashboard/payment/:orderId"
                    element={<Payment />}
                  />
                  <Route path="/dashboard/addReviews" element={<AddReview />} />
                  <Route
                    path="/dashboard/makeAdmin"
                    element={
                      <AdminRoute>
                        <MakeAdmin />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/dashboard/manageOrders"
                    element={
                      <AdminRoute>
                        <ManageOrders />
                      </AdminRoute>
                    }
                  />
                  <Route
                    path="/dashboard/addProducts"
                    element={
                      <AdminRoute>
                        <AddProducts />
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

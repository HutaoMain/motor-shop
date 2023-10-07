import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import ClientHome from "./pages/clientHome/ClientHome";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import Navbar from "./components/navbar/Navbar";
import AdminOrders from "./pages/adminOrders/AdminOrders";
import AdminViewOrders from "./components/adminViewProduct/AdminViewOrders";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientHome />} />
        {/* admin */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/orders/:id" element={<AdminViewOrders />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

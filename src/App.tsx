import "./App.css";
import { Routes, Route } from "react-router-dom";
import ClientHome from "./pages/clientHome/ClientHome";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientHome />} />
        {/* admin */}
        <Route path="/admin/products" element={<AdminProducts />} />
      </Routes>
    </>
  );
}

export default App;

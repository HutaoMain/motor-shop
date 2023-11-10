import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import ClientHome from "./pages/clientHome/ClientHome";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import Navbar from "./components/navbar/Navbar";
import AdminOrders from "./pages/adminOrders/AdminOrders";
import AdminViewOrders from "./components/adminViewProduct/AdminViewOrders";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
import ClientOrders from "./pages/clientOrders/ClientOrders";
import FloatingChatWidget from "./components/chat/FloatingChatWidget";
import AdminSupport from "./pages/adminSupport/AdminSupport";
import useAuthStore from "./zustand/AuthStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserInterface } from "./Types";

function App() {
  const user = useAuthStore((state) => state.user);

  const [userData, setUserData] = useState<UserInterface>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/user/${user}`
      );
      setUserData(res.data);
    };
    fetchData();
  }, []);

  const userIsAdmin = userData?.userRole === "ROLE_ADMIN";

  return (
    <>
      <Navbar />
      {!userIsAdmin ? <FloatingChatWidget /> : <></>}
      <Routes>
        <Route path="/" element={<ClientHome />} />
        <Route
          path="/client/orders"
          element={!userIsAdmin ? <ClientOrders /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/dashboard"
          element={userIsAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/products"
          element={userIsAdmin ? <AdminProducts /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/orders"
          element={userIsAdmin ? <AdminOrders /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/orders/:id"
          element={userIsAdmin ? <AdminViewOrders /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/chat-support"
          element={userIsAdmin ? <AdminSupport /> : <Navigate to="/" />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

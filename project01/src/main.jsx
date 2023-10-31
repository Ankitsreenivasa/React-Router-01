import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Header/>
    <Footer/>
  </React.StrictMode>
);

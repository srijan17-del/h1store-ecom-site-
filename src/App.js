import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToHashElement from "./components/ScrollToHashElement";
import {
  Outlet,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import Cart from "./pages/Cart";
import { productsData } from "./api/productsApi";
import ProductDetail from "./components/ProductDetails";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/About";
import ContactUs from "./pages/Contact";
// import Products from "./components/Products";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <ScrollToHashElement></ScrollToHashElement>
      <ScrollRestoration></ScrollRestoration>

      <Outlet></Outlet>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/Cart",
        element: <Cart></Cart>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/#products",
      },
      {
        path: "/About",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/Contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;

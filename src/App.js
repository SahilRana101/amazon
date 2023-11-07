import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./Home";
import Cart from "./pages/cart/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;

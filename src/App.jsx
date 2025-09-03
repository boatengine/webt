import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Stylebanner from "./components/Stylebanner";
import Category from "./components/Category";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <h3 className="text-center text-4xl mt-[50px] font-semibold">PRODUCTS</h3>
      <div className="max-w-screen-xl mx-auto p-8 flex gap-6 flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Stylebanner />
      <Category />
      <Footer />
    </>
  );
}

export default App;

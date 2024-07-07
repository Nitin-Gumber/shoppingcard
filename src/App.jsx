import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const location = useLocation();
  
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/product" element={<Home />}></Route> */}
        <Route
          path="*"
          element={
            <h1 className=" flex justify-center items-center text-2xl h-screen">
              {location.pathname.replace("/", "")} Page Not Found 404
            </h1>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

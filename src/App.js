import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/ContextReducer";
import { CartProviderProduct } from "./components/ContextReducerProduct";
import Product from "./screens/Product";
import FeedBack from "./screens/FeedBack";

function App() {
  return (
    <CartProvider>
      <CartProviderProduct>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/feedback" element={<FeedBack />} />
            </Routes>
          </div>
        </Router>
      </CartProviderProduct>
    </CartProvider>
  );
}

export default App;

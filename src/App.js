import GlobalStyle from "./components/Globalstyle";
import {Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import AccountUser from "./pages/AccountUser";

function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route index element={<Home/>}/>
          <Route path="/products" element= {<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element= {<Contact/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route path="/account" element= {<AccountUser/>}/>
        </Route>
      </Routes>
    </GlobalStyle>
  );
}

export default App;

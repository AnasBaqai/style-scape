import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Routes/NavigationBar/NavigationBar";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/shop/Shop.router";
import { ProductsProvider } from "./Context/productsContext";
function App() {


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ProductsProvider><Shop/></ProductsProvider>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Routes, Route} from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Routes/NavigationBar/NavigationBar";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/shop/Shop.router";

import CheckOutPage from "./Routes/CheckOut/Checkout.router";
function App() {

  
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
}

export default App;

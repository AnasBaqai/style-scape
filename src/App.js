import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from "./utils/FireBase/firebase.utils"
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Routes/NavigationBar/NavigationBar";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/shop/Shop.router";

import CheckOutPage from "./Routes/CheckOut/Checkout.router";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, [dispatch])


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
}

export default App;

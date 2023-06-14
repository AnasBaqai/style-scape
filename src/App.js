import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Signin from "./Components/sign-in/Sign-in";
function App() {


  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>} />
        <Route path="sign-in" element={<Signin/>} />
      </Route>
    </Routes>
  );
}

export default App;

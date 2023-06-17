import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Authentication from "./Components/Authentication/Authentication";
function App() {


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

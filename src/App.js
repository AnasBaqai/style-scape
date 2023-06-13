import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.Router";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {


  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

import CategoriesContainer from "../Components/CatogoriesContainer/CategoriesContainer";
import { Outlet } from "react-router-dom";

const Home=()=> {
 
  
    return (
        <div>
         
            <CategoriesContainer />
            <Outlet/>
        </div>
    );
  }
  
  export default Home;
  
import { Outlet} from "react-router-dom";
import { Fragment, useContext } from "react";
import { NavigationContainer,LogoContainer,Links,NavLink } from "./NavigationStyles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cartIcon/cartIcon.component";
import CartDropDown from "../../Components/CartDropdown/CartDropdown.component";
import { UserContext } from "../../Context/UserContext";
import { signOutUser } from "../../utils/FireBase/firebase.utils";
import { CartContext } from "../../Context/CartContext";
const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const cartClickHandler = ()=>{

        setIsCartOpen((prevValue)=>{
            return prevValue?false:true
        })
    }

    return (

        <Fragment>
            <NavigationContainer className="navigation">
                <LogoContainer className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <Links  className="nav-links-container">
                    <NavLink className="nav-link" to="/shop">SHOP</NavLink>
                    {currentUser ?
                        <NavLink className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink> :
                        <NavLink  className="nav-link" to="/auth">SIGN IN</NavLink>
                    }
                    <CartIcon onCLickHandler={cartClickHandler} />
                </Links>
                {isCartOpen?<CartDropDown/>:""}
               
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
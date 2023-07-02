import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { NavigationContainer } from "./NavigationStyles";
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
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div  className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ?
                        <Link className="nav-link" onClick={signOutUser}>SIGN OUT</Link> :
                        <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }
                    <CartIcon onCLickHandler={cartClickHandler} />
                </div>
                {isCartOpen?<CartDropDown/>:""}
               
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
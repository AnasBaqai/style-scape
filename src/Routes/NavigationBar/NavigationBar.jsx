import { Outlet} from "react-router-dom";
import { Fragment} from "react";
import { useSelector } from "react-redux";
import { NavigationContainer,LogoContainer,Links,NavLink } from "./NavigationStyles";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../Components/cartIcon/cartIcon.component";
import CartDropDown from "../../Components/CartDropdown/CartDropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/FireBase/firebase.utils";
import { useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const NavigationBar = () => {
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch = useDispatch()
    const cartClickHandler = ()=>{
        dispatch(setIsCartOpen(!isCartOpen))
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
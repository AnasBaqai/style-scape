import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation-bar.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../Context/UserContext";
import { signOutUser } from "../../utils/FireBase/firebase.utils";
const NavigationBar = () => {
    const { currentUser,setCurrentUser } = useContext(UserContext);
    const signOutHandler= async()=>{
        await signOutUser();
        setCurrentUser(null)
    }

    return (

        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ?
                        <Link className="nav-link" onClick={signOutHandler}>SIGN OUT</Link> :
                        <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
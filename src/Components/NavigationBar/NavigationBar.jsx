import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation-bar.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../Context/UserContext";

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser)
    return (

        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ?
                        <Link className="nav-link" to="">SIGN OUT</Link> :
                        <Link className="nav-link" to="/auth">SIGN IN</Link>
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}


export default NavigationBar
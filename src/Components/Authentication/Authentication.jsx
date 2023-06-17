import "./Authentication.styles.scss"
import SignUpForm from "../SignUp-Form/SignUpForm.Component"
import SignInForm from "../SignIn-Form/SignInForm.Component"
const Authentication = () => {
  
    
 
    return (
        <div className="authentication-container">
        <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication

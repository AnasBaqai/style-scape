import "./Authentication.styles.scss"
import SignUpForm from "../../Components/SignUp-Form/SignUpForm.Component"
import SignInForm from "../../Components/SignIn-Form/SignInForm.Component"
const Authentication = () => {
  
    
 
    return (
        <div className="authentication-container">
        <SignInForm/>
            <SignUpForm />
        </div>
    )
}

export default Authentication

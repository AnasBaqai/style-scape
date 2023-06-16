import { signInWithGooglePopUp, createUserDocument } from "../../utils/FireBase/firebase.utils"
import SignUpForm from "../SignUp-Form/SignUpForm.Component"
const Signin = () => {
    const signInHandler = async () => {
        try {
            const { user } = await signInWithGooglePopUp()
         
            const userDocRef = createUserDocument(user);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={signInHandler} >Sign In</button>
            <SignUpForm/>
        </div>
    )
}

export default Signin

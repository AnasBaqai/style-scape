import { useState } from "react"
import { signInWithGooglePopUp, SignInUserWithEmailPassword } from "../../utils/FireBase/firebase.utils"
import "./SignInForm.Styles.scss"
import Button,{BUTTON_TYPE_CLASSES} from "../Button/Button.Component"
import FormInput from "../form-input/FormInput.Component"




const defaultSignInFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [siginInFields, setsignInfields] = useState(defaultSignInFields)
    const { email, password } = siginInFields;

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setsignInfields({ ...siginInFields, [name]: value });

    }
    const restFormField = () => {

        setsignInfields(defaultSignInFields);
    }

    const GoogleSignInHandler = async () => {
        try {
            await signInWithGooglePopUp()


        } catch (err) {
            console.log(err);
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {

            await SignInUserWithEmailPassword(email, password);

            restFormField()
        } catch (err) {
            if (err.code === "auth/wrong-password") {
                alert("wrong password");
            } else if (err.code === "auth/user-not-found") {
                alert("wrong email");
            }
            console.log(err.code)
        }



    }

    return (
        <div className="sign-up-container">
            <h2>already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={submitHandler}>

                <FormInput label="Email" type="email" name="email" value={email} required onChange={onChangeHandler} />
                <FormInput label="Password" type="password" name="password" value={password} required onChange={onChangeHandler} />
                <div className="buttons-container">
                    <Button type="submit" >SIGN IN</Button>
                    <Button type="button" onClick={GoogleSignInHandler} buttonType={BUTTON_TYPE_CLASSES.google}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm

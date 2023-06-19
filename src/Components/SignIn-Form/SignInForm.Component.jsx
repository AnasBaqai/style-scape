import { useState, useContext } from "react"
import { signInWithGooglePopUp, createUserDocument, SignInUserWithEmailPassword } from "../../utils/FireBase/firebase.utils"
import "./SignInForm.Styles.scss"
import Button from "../Button/Button.Component"
import FormInput from "../form-input/FormInput.Component"

import { UserContext } from "../../Context/UserContext"


const defaultSignInFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [siginInFields, setsignInfields] = useState(defaultSignInFields)
    const { email, password } = siginInFields;
    const { setCurrentUser } = useContext(UserContext)
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setsignInfields({ ...siginInFields, [name]: value });

    }
    const restFormField = () => {

        setsignInfields(defaultSignInFields);
    }

    const GoogleSignInHandler = async () => {
        try {
            const { user } = await signInWithGooglePopUp()

            createUserDocument(user);
        } catch (err) {
            console.log(err);
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            
            const user  = await SignInUserWithEmailPassword(email, password);
            setCurrentUser(user);
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
                    <Button type="button" onClick={GoogleSignInHandler} buttonType={"google"}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm

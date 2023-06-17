import { useState } from "react"
import { signInWithGooglePopUp, createUserDocument, SignInUserWithEmailPassword } from "../../utils/FireBase/firebase.utils"
import "./SignInForm.Styles.scss"
import Button from "../Button/Button.Component"
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
            const { user } = await signInWithGooglePopUp()

            createUserDocument(user);
        } catch (err) {
            console.log(err);
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        try {
            const user = await SignInUserWithEmailPassword(email, password);
            console.log(user)
            restFormField()
        } catch (err) {
            console.log(err.code)
        }



    }

    return (
        <div className="sign-up-container">
            <h2>already have an account</h2>
            <h5>Sign In with your email and password</h5>
            <form onSubmit={submitHandler}>

                <FormInput label="Email" type="email" name="email" value={email} required onChange={onChangeHandler} />
                <FormInput label="Password" type="password" name="password" value={password} required onChange={onChangeHandler} />
                <div className="buttons-container">
                    <Button type="submit" >SIGN IN</Button>
                    <Button onClick={GoogleSignInHandler} buttonType={"google"}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm

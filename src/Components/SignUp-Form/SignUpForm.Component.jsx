import { useState } from "react"

import FormInput from "../form-input/FormInput.Component";

import { createAuthUserWithEmailandPassword, createUserDocument } from "../../utils/FireBase/firebase.utils";

import "./SignUpForm.styles.scss"

import Button from "../Button/Button.Component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const restFormField = () => {

        setFormFields(defaultFormFields);
    }

    const onChangeHandler = (event) => {

        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const { user } = await createAuthUserWithEmailandPassword(email, password);
 
                createUserDocument(user, { displayName });
                restFormField()
            } catch (err) {
                if (err.code === "auth/email-already-in-use")
                    alert("email already in use")
                console.log(err);
            }
        } else {
            alert("password do not match")
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={onSubmitHandler}>

                <FormInput label={"UserName"} type="text" required name="displayName" value={displayName} onChange={onChangeHandler} />

                <FormInput label={"email"} type="Email" required name="email" value={email} onChange={onChangeHandler} />

                <FormInput label={"Password"} type="password" required name="password" value={password} onChange={onChangeHandler} />

                <FormInput label={"ConfirmPassword"} type="password" required name="confirmPassword" value={confirmPassword} onChange={onChangeHandler} />
                <Button type="submit" children="Sign Up" />
            </form>

        </div>
    )
}


export default SignUpForm
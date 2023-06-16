import { useState } from "react"

import { createAuthUserWithEmailandPassword,createUserDocument } from "../../utils/FireBase/firebase.utils";

const defaultFormFields= {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}= formFields;


    const onChangeHandler= (event)=>{
        const {name,value}= event.target;
        setFormFields({...formFields,[name]:value});
    }
    const onSubmitHandler = async(event)=>{
        event.preventDefault();
        if(password === confirmPassword){
            const {user} = await createAuthUserWithEmailandPassword(email,password);
            user.displayName= displayName;
            console.log(user);
            const userDocRef = createUserDocument(user);
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onSubmitHandler}>
                <label>UserName</label>
                <input type="text" required name="displayName" value={displayName} onChange={onChangeHandler} />
                <label>Email</label>
                <input type="Email" required name="email" value={email}  onChange={onChangeHandler}/>
                <label>Password</label>
                <input type="password" required name="password" value={password} onChange={onChangeHandler} />
                <label>Confirm Password</label>
                <input type="password" required name="confirmPassword" value={confirmPassword} onChange={onChangeHandler} />
                <button>Submit</button>
            </form>

        </div>
    )
}


export default SignUpForm
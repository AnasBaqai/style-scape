import { signInWithGooglePopUp, createUserDocument } from "../../utils/FireBase/firebase.utils"



const Signin = () => {

    const signInHandler =async ()=>{
        try{
            const {user} = await signInWithGooglePopUp()
            createUserDocument(user);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={signInHandler} >Sign In</button>
        </div>
    )
}

export default Signin

import { useEffect } from "react"
import { signInWithGooglePopUp, createUserDocument, signInWithGoogleRedirect, auth } from "../../utils/FireBase/firebase.utils"

import { getRedirectResult } from "firebase/auth"

const Signin = () => {

    useEffect(() => {
        const getRes = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = createUserDocument(response.user);
            }
        }
        getRes();
        }, [])
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
            <button onClick={signInWithGoogleRedirect} >Sign In with redirect</button>
        </div>
    )
}

export default Signin

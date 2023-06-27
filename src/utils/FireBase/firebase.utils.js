// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,getDocs,query } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAa4PyRMfS5yCxMCgTWDXF3bG9u15VnROk",
   authDomain: "style-scape.firebaseapp.com",
   projectId: "style-scape",
   storageBucket: "style-scape.appspot.com",
   messagingSenderId: "767275985703",
   appId: "1:767275985703:web:9ccb601e0aefab704b1702"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
// this is a class
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt: "select_account",
})
// this is a function
export const auth = getAuth()

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore();

export const createCollectionAndDocuments= async(collectionKey,objsToAdd)=>{
   const collectionRef = collection(db,collectionKey)
   const batch = writeBatch(db)
   objsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
   })
   await batch.commit()
   console.log("done")
}

export const getCategoriesAndDocuments = async()=>{
   const collectionRef = collection(db,"categories");

   const q = query(collectionRef)

   const querySnapShot = await getDocs(q)

   const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
  
      const {title,items}= docSnapShot.data()
      acc[title.toLowerCase()]= items;
      return acc
   },{})

   return categoryMap
}
export const createUserDocument = async (user, additionalInformation = {}) => {
   if (!user) return;
   const userDocRef = doc(db, "users", user.uid);
   const userSnapShot = await getDoc(userDocRef);
   const { displayName, email } = user
   if (!userSnapShot.exists()) {
      try {
         await setDoc(userDocRef, {
            displayName: displayName,
            email: email,
            createdAt: new Date(),
            ...additionalInformation,
         })
      } catch (err) {
         console.log(err.message)
      }
   }


   return userDocRef;
}

export const createAuthUserWithEmailandPassword = async (email, password) => {
   if (!email || !password) return

   return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignInUserWithEmailPassword = async (email, password) => {
   if (!email || !password) return
   const userCredentials = await signInWithEmailAndPassword(auth, email, password)
   return userCredentials.user;
}


export const onAuthStateChangedListener = (callback)=>{
   onAuthStateChanged(auth,callback)
}

export const signOutUser = async()=> await signOut(auth)
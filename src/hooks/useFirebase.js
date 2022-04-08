import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


//initializeFirebase App
initializeFirebase();
const useFirebase  = () => {
    const [user, setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            setAuthError('');
            // ...
          })
          .catch((error) => {
           
             setAuthError(error.message);
            // ..
          })
          .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/home';
            navigate.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
          
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
      
    }

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })

       
    }

    //observer user strate 
    useEffect(() => {
     const unsubscribed =   onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
            
            } else {
                setUser({});
              
            }
            setIsLoading(false);
            
          });
          return () => unsubscribed;
    },[])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }
   
    return{
        user,
        error,
        signInUsingGoogle,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}
export default useFirebase;
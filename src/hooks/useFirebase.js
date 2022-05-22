import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";



initializeFirebase();
const useFirebase  = () => {
    const [user, setUser] = useState({});
    const [error,setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, navigate) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const newUser = { email, displayName: name };
              setUser(newUser);
              StoreUserInformation(newUser);
             

              navigate.replace('/home');
          })
          .catch((error) => {
              setAuthError(error.message);
           
          })
          .finally(() => setIsLoading(false));
  }

   

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const redirect = location.state?.from || "/home";

            navigate.replace(redirect);
            setAuthError('');
        })
        .catch((error) => {
          
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
      
    }

  

    const signInWithGoogle = (location, navigate) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
          .then((result) => {
            const user = result.user;
            setAuthError('');
            StoreUserInformation(result.user.name, result.user.email);

          }).catch((error) => {

              setAuthError(error.message);
              
          })
          .finally(() => setIsLoading(false));

  }


  
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
           
          }).catch((error) => {
            
          })
          .finally(() => setIsLoading(false));
    }

   
  const  StoreUserInformation = ({ email, name}) => {
    fetch('http://localhost:5000/signup/userInformation', {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({name, email})
    }).then(res => res.json())
      .then(data => console.log(data))
   }
   
    return{
        user,
        error,
        signInWithGoogle,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}
export default useFirebase;










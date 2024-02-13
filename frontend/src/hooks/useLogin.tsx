import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../config/firebase.config';

const auth = getAuth(app)

const useLogin = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((err) => console.log(err))
    }
};

export default useLogin;
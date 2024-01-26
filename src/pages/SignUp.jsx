import React, { useState, useEffect } from 'react';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, getAuth } from 'firebase/auth';
import { ref, set } from 'firebase/database';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [uid, setUid] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid);
            } else {
                setUid(null);
            }
        });

        return () => unsubscribe();
    }, []);

    // const signUp = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Create user with email and password
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    //         // Get the newly created user
    //         const user = userCredential.user;

    //         // Update user profile with first and last name
    //         await updateProfile(user, {
    //             displayName: `${firstName} ${lastName}`
    //         });

    //         // Update user data in the Realtime Database
    //         await set(ref(database, `users/${user.uid}`), {
    //             uid: user.uid,
    //             email: user.email,
    //             firstName: firstName,
    //             lastName: lastName
    //             // Add any other user-related data as needed
    //         });

    //         console.log('User successfully signed up:', user);

    //     } catch (error) {
    //         console.error('Error signing up:', error.message);
    //     }
    // };

    const signUp = async (e) => {
        e.preventDefault();
    
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
            // Get the newly created user
            const user = userCredential.user;
    
            // Update user profile with first and last name
            await updateProfile(user, {
                displayName: `${firstName} ${lastName}`
            });
    
            // Wait for the user profile update to complete
            await new Promise(resolve => setTimeout(resolve, 1000)); // You can adjust the timeout if needed
    
            // Fetch the user again to ensure profile updates are reflected
            const updatedUser = await getAuth().currentUser;
    
            // Update user data in the Realtime Database
            await set(ref(database, `users/${updatedUser.uid}`), {
                uid: updatedUser.uid,
                email: updatedUser.email,
                firstName: firstName,
                lastName: lastName
                // Add any other user-related data as needed
            });
    
            console.log('User successfully signed up:', updatedUser);
    
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };
    

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create an Account</h1>
                <input
                    type="text"
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />

                <input
                    type="text"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />

                <input
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input
                    type="password"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
            </form>

            {uid && <p>UID: {uid}</p>}
        </div>
    );
}

export default SignUp;

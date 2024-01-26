import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile:</h2>
          <p>{`User ID: ${user.uid}`}</p>
          <p>{`Email: ${user.email}`}</p>
          {user.displayName && <p>{`Name: ${user.displayName}`}</p>}
          {/* Add other user properties as needed */}
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default UserProfile;


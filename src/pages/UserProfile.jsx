import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { updateProfile, updateEmail } from "firebase/auth";
import { getDatabase, ref, update as updateDatabase } from "firebase/database";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ displayName: '', email: '' });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        // Initialize editData with current user data
        setEditData({
          displayName: user.displayName || '',
          email: user.email || '',
        });
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    try {
      if (auth.currentUser) {
        // Update display name
        if (editData.displayName !== user.displayName) {
          await updateProfile(auth.currentUser, {
            displayName: editData.displayName,
          });
        }
        // Update email
        if (editData.email !== user.email) {
          await updateEmail(auth.currentUser, editData.email);
        }
        // Update Realtime Database
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        await updateDatabase(userRef, editData);
        // Update local state to reflect changes
        setUser({ ...user, ...editData });
        setIsEditing(false); // Exit editing mode
      }
    } catch (error) {
      console.error(error);
      // Handle errors here, such as displaying a notification
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile:</h1>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="displayName"
                value={editData.displayName}
                onChange={handleEditChange}
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
              />
              <button onClick={saveChanges}>Save Changes</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{`User ID: ${user.uid}`}</p>
              <p>{`Email: ${user.email}`}</p>
              {user.displayName && <p>{`Name: ${user.displayName}`}</p>}
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          )}
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default UserProfile;

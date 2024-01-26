import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase());
      const usersRef = child(dbRef, "users");

      try {
        const snapshot = await get(usersRef);

        if (snapshot.exists()) {
          // Convert the snapshot's value to an array of users
          const usersArray = Object.entries(snapshot.val()).map(([key, value]) => ({
            id: key,
            ...value,
          }));

          setUsers(usersArray);
        } else {
          console.log("No users available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            {`Name: ${user.firstName} ${user.lastName}, Email: ${user.email}, User ID: ${user.id}`}
            {/* Add other user properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default ListUsers;







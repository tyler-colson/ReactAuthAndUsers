// // NavigationBar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavigationBar = () => {
//   return (
//     <nav>
//       <ul class=' list-group list-group-horizontal'>
//         <li class="list-group-item "><Link to="/">Sign In</Link></li>
//         <li class="list-group-item"><Link to="/SignUp">Sign Up</Link></li>
//         <li class="list-group-item"><Link to="/AuthDetails">Logged In Details</Link></li>
//         <li class="list-group-item"><Link to="/ListUsers">List Users</Link></li>
//         <li class="list-group-item"><Link to="/UserProfile">User Profile</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;

import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul class='list-group list-group-horizontal'>
      <Link to="/"><button class="list-group-item ">Sign In</button></Link>
      <Link to="/SignUp"> <li class="list-group-item">Sign Up</li></Link>
      <Link to="/UserProfile"><li class="list-group-item">User Profile</li></Link>
      <Link to="/ListUsers"><li class="list-group-item">List Users</li></Link>
      <Link to="/AuthDetails"><li class="list-group-item">Logged In Details</li></Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
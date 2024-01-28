import logo from './logo.svg';
import './App.css';
import SignIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import AuthDetails from './pages/AuthDetails';
import ListUsers from './pages/ListUsers';
import UserProfile from './pages/UserProfile';
import AppRouter from './pages/AppRouter';

// function App() {
//   return (
//     <div className="App">
// <SignIn />
// <SignUp />
// <AuthDetails />
// <UserProfile />
// <ListUsers />

//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;

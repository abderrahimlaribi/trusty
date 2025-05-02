
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Landingpage/HeroPage.jsx';
import Login from './pages/login/login.jsx';
import SignUpUser from './pages/SignUp/SignUpUser.jsx';
import ResetPassword from './components/login/ResetPassword.jsx';
import UserProfile from './pages/user/UserProfile.jsx';
import HomePage from './pages/user/HomePage.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/SignUpUser" element={<SignUpUser />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />








      </Routes>
    </Router>
  );
}

export default App;


import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="nav-item">
      <Link to="/login">Login</Link>
      <Link to="/registration">Register</Link>
    </div>
  );
};

export default AuthNav;

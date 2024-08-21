import { Link } from 'react-router-dom';

const UserMenu = () => {
  const user = 'Vlados';
  return (
    <div className="nav-item">
      <p>Welcome, {user} 😎</p>
      <Link to=""></Link>
    </div>
  );
};

export default UserMenu;

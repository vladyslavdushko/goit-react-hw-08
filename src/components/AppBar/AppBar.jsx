import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navbar from '../Navbar/Navbar';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={styles.navbar}>
        <Navbar />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </div>
  );
};

export default AppBar;

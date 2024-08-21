import AuthNav from '../AuthNav/AuthNav';
import Navbar from '../Navbar/Navbar';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';
const AppBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Navbar />
        <UserMenu />
        <AuthNav />
      </nav>
    </div>
  );
};

export default AppBar;

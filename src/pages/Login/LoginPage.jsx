import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2 className={styles.registration_header}>Login form</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;

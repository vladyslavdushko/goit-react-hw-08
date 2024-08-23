import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const LoginPage = () => {
  return (
    <>
      <h2 className={styles.registration_header}>Login form</h2>
      <LoginForm />
    </>
  );
};

export default LoginPage;

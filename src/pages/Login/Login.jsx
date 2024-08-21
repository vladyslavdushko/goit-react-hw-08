import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <h2 className={styles.registration_header}>Login form</h2>
      <LoginForm />
    </>
  );
};

export default Login;

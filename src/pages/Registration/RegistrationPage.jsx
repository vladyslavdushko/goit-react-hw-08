import { Navigate } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Register.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2 className={styles.registration_header}>Registration</h2>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Register.module.css';
const Register = () => {
  return (
    <>
      <h2 className={styles.registration_header}>Registration</h2>
      <RegistrationForm />
    </>
  );
};

export default Register;

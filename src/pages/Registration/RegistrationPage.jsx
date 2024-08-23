import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './Register.module.css';
const RegistrationPage = () => {
  return (
    <>
      <h2 className={styles.registration_header}>Registration</h2>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;

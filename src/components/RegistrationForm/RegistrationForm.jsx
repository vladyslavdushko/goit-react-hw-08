import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/operations.js';
import { Link, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import Button from '../Button/Button.jsx';

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Ім’я має містити не менше 2 символів')
      .max(50, 'Ім’я має містити не більше 50 символів')
      .required('Це поле обов’язкове'),
    email: Yup.string()
      .email('Невірний формат електронної пошти')
      .required('Це поле обов’язкове'),
    password: Yup.string()
      .min(6, 'Пароль має містити не менше 6 символів')
      .required('Це поле обов’язкове'),
  });

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, actions) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(userData));
    actions.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.field_container}>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="p" style={{ color: 'red' }} />
          </label>

          <label className={styles.field_container}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </label>

          <label className={styles.field_container}>
            Password
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: 'red' }}
            />
          </label>

          <Button>Register</Button>
        </Form>
      </Formik>

      <div className={styles.link_container}>
        <p>
          Already have an account?{' '}
          <Link to="/login" className={styles.register_link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;

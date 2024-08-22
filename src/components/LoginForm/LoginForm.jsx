import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Невірний формат електронної пошти')
      .required('Це поле обов’язкове'),
    password: Yup.string()
      .min(6, 'Пароль має містити не менше 6 символів')
      .required('Це поле обов’язкове'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, actions) => {
    dispatch(loginUser(values));
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
          <div className={styles.field_container}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error_message}
            />
          </div>

          <div className={styles.field_container}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error_message}
            />
          </div>

          <button type="submit" className={styles.submit_button}>
            Log in
          </button>
        </Form>
      </Formik>

      <div className={styles.link_container}>
        <p>
          Don’t have an account?{' '}
          <Link to="/registration" className={styles.register_link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

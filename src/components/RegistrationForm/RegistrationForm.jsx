import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';

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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Паролі не співпадають')
      .required('Це поле обов’язкове'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Форма відправлена', values);
    // Тут ви можете викликати API або інші дії після відправлення форми
  };

  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.field_container}>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className={styles.field_container}>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className={styles.field_container}>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <div className={styles.field_container}>
            <ErrorMessage
              name="confirmPassword"
              component="div"
              style={{ color: 'red' }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;

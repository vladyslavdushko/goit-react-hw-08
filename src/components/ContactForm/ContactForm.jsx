import styles from './ContactForm.module.css';
import {ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {  
  const dispatch = useDispatch()

  const userSchema = Yup.object({
    name: Yup.string().required('Name is requiered').min(3, "Name must be at least 3 chars").max(50),
    number: Yup.string()
    .required('This field is required!')
    .min(3, 'Enter at least 3 digits')
    .max(50, 'Enter valid phone number')
    .matches(/[1-4]/g, 'Must be only numers!')
  })

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  let initialValues = {
    name: '',
    number: ''
  };

  return (
    <Formik validationSchema={userSchema} initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.contactForm}>
        <label className={styles.label}>
          Name
          <Field 
          type="text" 
          name="name" 
          />
          <ErrorMessage name='name' component='span' className={styles.errorMessage}/>
        </label>
        <label className={styles.label}>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name='number' component='span' className={styles.errorMessage}/>

        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

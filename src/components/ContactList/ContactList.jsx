import {useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from '../ContactList/ContactList.module.css';
import {selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const users = useSelector(selectFilteredContacts); 

  return (
    <ul className={styles.contactContainer}>
      {users.length > 0 && users.map(user => (
        <Contact key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default ContactList;

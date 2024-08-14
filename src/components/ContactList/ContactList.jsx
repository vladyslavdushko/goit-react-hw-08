import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from '../ContactList/ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const users = useSelector(selectContacts); 
  const filter = useSelector(selectNameFilter); 

  const filteredContacts = users.filter(user => 
    user.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.contactContainer}>
      {filteredContacts.map(user => (
        <Contact key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default ContactList;

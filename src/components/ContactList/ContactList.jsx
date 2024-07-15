import Contact from '../Contact/Contact';
import styles from '../ContactList/ContactList.module.css'

const ContactList = ({ contacts, search, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul className={styles.contactContainer}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;

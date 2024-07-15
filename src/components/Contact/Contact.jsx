import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.ContactListItem}>
      <div className={styles.outeruserInfoContainer}>
        <div className={styles.userInfoContainer}>
          <BsPersonFill className={styles.icon} />
          <p>{contact.name}</p>
        </div>
        <div className={styles.userInfoContainer}>
          <FaPhoneAlt className={styles.icon} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button className={styles.deleteBtn} onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;

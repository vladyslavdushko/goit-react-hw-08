import { BsPersonFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import styles from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({user}) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.ContactListItem}>
      <div className={styles.outeruserInfoContainer}>
        <div className={styles.userInfoContainer}>
          <BsPersonFill className={styles.icon} />
          <p>{user.name}</p>
        </div>
        <div className={styles.userInfoContainer}>
          <FaPhoneAlt className={styles.icon} />
          <p>{user.number}</p>
        </div>
      </div>
      <button 
        className={styles.deleteBtn} 
        onClick={() => dispatch(deleteContact(user.id))} // Використовуємо id для видалення
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
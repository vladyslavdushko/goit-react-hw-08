import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/slice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import Loading from '../Loading/Loading';
import { selectToken } from '../../redux/auth/selectors';

const ContactList = () => {
  const users = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
    <div className="container">
      <ContactForm />
      <SearchBox />
      {loading && <Loading />}
      <ul className={styles.contactContainer}>
        {users.length > 0 &&
          users.map((user) => <Contact key={user.id} user={user} />)}
      </ul>
    </div>
  );
};

export default ContactList;

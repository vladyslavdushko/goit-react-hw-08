import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import SearchBox from '../SearchBox/SearchBox';
import Loading from '../Loading/Loading';
import { selectToken } from '../../redux/auth/selectors';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

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

import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <h2 className={styles.not_found_text}>
      Oops, look like this page doesn`t exist❌
    </h2>
  );
};

export default NotFound;

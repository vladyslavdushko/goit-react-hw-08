import styles from "./SearchBox.module.css";

const SearchBox = ({ setSearch }) => {
  return (
    <>
      <label className={styles.searchContainer}>
        Find contact by name
        <input 
          type="text" 
          onChange={(e) => setSearch(e.target.value.toLowerCase())} 
        />
      </label>
    </>
  );
};

export default SearchBox;

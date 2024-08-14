import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

const SearchBox = () => {

  const dispatch = useDispatch()

  return (
    <>
      <label className={styles.searchContainer}>
        Find contact by name
        <input 
          type="text" 
          onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))} 
        />
      </label>
    </>
  );
};

export default SearchBox;

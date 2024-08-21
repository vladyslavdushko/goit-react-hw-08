import styles from "./SearchBox.module.css";
import { changeFilter, selectNameFilter,  } from "../../redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <label className={styles.searchContainer}>
      Find contact by name
      <input
      type="text"
    value={value}  
      onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

export default SearchBox;

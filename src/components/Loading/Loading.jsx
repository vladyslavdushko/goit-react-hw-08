import { LineWave } from 'react-loader-spinner';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#000"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default Loading;

import { LineWave } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#fff"
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

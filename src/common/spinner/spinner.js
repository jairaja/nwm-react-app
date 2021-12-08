import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => {
    return (
      <>
        <Loader
          type="TailSpin"
          color="#E0E0E0"
          height={100}
          width={100}
        />
        <p>Please wait...</p>
      </>
    );
}

export default Spinner;
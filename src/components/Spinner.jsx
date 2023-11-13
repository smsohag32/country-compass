import { RevolvingDot } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center">
      <div className="my-container text-center flex  items-center justify-center">
        <RevolvingDot
          radius="45"
          strokeWidth="5"
          color="blue"
          secondaryColor="#fa8714"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Spinner;

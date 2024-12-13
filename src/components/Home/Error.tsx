import error from "../../assets/error.png";
const Error: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center md:mt-[-2%] h-[80%] ">
        <img
          src={error}
          alt="Error"
          className="w-[60%] md:h-[80%] md:w-[20%]"
        />
      </div>
      <div className="text-[#999999] w-[60%] mx-auto flex justify-end text-[80%]">No Results Found</div>
    </div>
  );
};
export default Error;

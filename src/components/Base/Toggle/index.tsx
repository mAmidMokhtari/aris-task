interface IProps {
  onClick: () => void;
  value: boolean;
}

export const Toggle: React.FC<IProps> = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        value
          ? "focus:ring-2 focus:ring-green-500"
          : "focus:ring-2 focus:ring-green-600"
      } ${value ? "justify-start" : "justify-end"} ${
        value ? "bg-green-500" : "bg-gree-600"
      }  h-5 w-12 flex transition duration-500`}
    >
      <span
        className={`bg-gray-100 transition duration-500 w-1/2 h-full m-0 p-0 shadow-xl`}
      ></span>
    </button>
  );
};

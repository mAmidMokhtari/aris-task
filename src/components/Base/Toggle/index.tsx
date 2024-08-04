import { useToggle } from "hooks/useToggle";

export const Toggle = () => {
  const [value, toggle] = useToggle();
  const handleClick = () => toggle();

  return (
    <button
      onClick={handleClick}
      className={`${
        value
          ? "focus:ring-2 focus:ring-green-500"
          : "focus:ring-2 focus:ring-green-300"
      } ${value ? "justify-start" : "justify-end"} ${
        value ? "bg-green-500" : "bg-gree-300"
      }  h-5 w-12 flex transition duration-500`}
    >
      <span
        className={`bg-gray-100 transition duration-500 w-1/2 h-full m-0 p-0 shadow-xl`}
      ></span>
    </button>
  );
};

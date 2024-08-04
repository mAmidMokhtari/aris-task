import { useToggle } from "hooks/useToggle";

export function Toggle() {
  const [value, toggle] = useToggle();
  const handleClick = () => toggle();

  return (
    <button
      onClick={handleClick}
      className={`${
        value
          ? "focus:ring-2 focus:ring-green-500"
          : "focus:ring-2 focus:ring-slate-200"
      } ${value ? "justify-end" : "justify-start"} ${
        value ? "bg-green-500" : "bg-slate-200"
      }  h-6 w-12 flex transition duration-200`}
    >
      <span
        className={`bg-gray-300 transition duration-500 w-1/2 h-full m-0 p-0 shadow-xl`}
      ></span>
    </button>
  );
}

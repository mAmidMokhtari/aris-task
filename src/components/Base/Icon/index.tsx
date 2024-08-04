// src/components/Icon.tsx

import React, { SVGProps } from "react";

// Define the type for the icon names
type IconName = "myIcon" | "anotherIcon"; // Add more icon names as needed

// Define the props for the Icon component
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  width?: number;
  height?: number;
  fill?: string;
}

// Function to return the SVG path based on the icon name
const getIconPath = (name: IconName) => {
  switch (name) {
    case "myIcon":
      return (
        <path
          d="M4.5 25.5V18H0.75L4.5625 8.375C4.77083 7.875 5.09375 7.47917 5.53125 7.1875C5.96875 6.89583 6.45833 6.75 7 6.75C7.54167 6.75 8.03125 6.89583 8.46875 7.1875C8.90625 7.47917 9.22917 7.875 9.4375 8.375L13.25 18H9.5V25.5H4.5ZM7 5.5C6.3125 5.5 5.72417 5.255 5.235 4.765C4.745 4.27583 4.5 3.6875 4.5 3C4.5 2.3125 4.745 1.72375 5.235 1.23375C5.72417 0.744583 6.3125 0.5 7 0.5C7.6875 0.5 8.27625 0.744583 8.76625 1.23375C9.25542 1.72375 9.5 2.3125 9.5 3C9.5 3.6875 9.25542 4.27583 8.76625 4.765C8.27625 5.255 7.6875 5.5 7 5.5Z"
          fill="#1C1B1F"
        />
      );
    case "anotherIcon":
      return <path d="M..." fill="#..." />;
    // Add more cases for other icons here
    default:
      return null;
  }
};

// Icon component
const Icon: React.FC<IconProps> = ({
  name,
  width = 14,
  height = 26,
  fill = "#1C1B1F",
  className = "",
  style = {},
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    {...props}
  >
    {React.cloneElement(getIconPath(name)!, { fill })}
  </svg>
);

export default Icon;

import React from "react";

interface FacebookProps {
  size?: string
  className?: string
}
const Facebook = ({ size = '35', className = 'fill-white group-hover:fill-red-600 duration-300 ease-in-out' }: FacebookProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className="group cursor-pointer"
    >
      <g clipPath="url(#clip0_41_91)">
        <path
          className={className}
          d="M17.5 0C27.165 0 35 7.835 35 17.5c0 8.735-6.4 15.975-14.766 17.287V22.56h4.078l.776-5.059h-4.854v-3.283c0-.371.05-.74.163-1.082.256-.77.843-1.398 1.943-1.59.226-.04.474-.06.746-.06h2.207V7.177s-2.003-.342-3.917-.342c-3.998 0-6.61 2.423-6.61 6.809V17.5h-4.444v5.059h4.444v12.228C6.4 33.475 0 26.235 0 17.5 0 7.835 7.835 0 17.5 0z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_41_91">
          <path fill="#fff" d="M0 0H35V35H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
export default Facebook;
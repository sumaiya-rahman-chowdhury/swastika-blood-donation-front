import React, { MouseEventHandler, ReactNode } from "react";

interface GeneralButtonProps {
  value: string | number | ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
function GeneralButton({ value, onClick, className }: GeneralButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-auto shadow-lg text-white font-semibold py-2 px-5 
        border-[1px] transition bg-red-800 border-red-800 ${className}
      `}
    >
      {value}
    </button>
  );
}

export default GeneralButton;

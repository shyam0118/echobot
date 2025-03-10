import React from "react";

interface IconButtonProps {
  Icon: React.ElementType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => (
  <button
    className="cursor-pointer flex items-center space-x-2"
    onClick={onClick}
  >
    <Icon size={22} />
  </button>
);

export default IconButton;

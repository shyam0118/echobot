import React from "react";

interface IconButtonProps {
  Icon: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ Icon, onClick }: IconButtonProps) => (
  <button
    className="cursor-pointer flex items-center space-x-2"
    onClick={onClick}
  >
    <Icon size={24} />
  </button>
);

export default IconButton;

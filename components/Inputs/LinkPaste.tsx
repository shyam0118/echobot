import { LinkIcon } from "lucide-react";
import React from "react";

interface LinkPasteProps {
  handleLinkPaste: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LinkPaste = ({ handleLinkPaste }: LinkPasteProps) => (
  <label html-for="link-input" className="cursor-pointer">
    <LinkIcon className="text-gray-400" size={22} />
    <input
      type="text"
      id="link-input"
      className="hidden"
      onChange={handleLinkPaste}
    />
  </label>
);

export default LinkPaste;

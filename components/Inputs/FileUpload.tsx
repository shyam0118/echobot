import { Paperclip } from "lucide-react";
import React from "react";

interface FileUploadProps {
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ handleFileUpload }: FileUploadProps) => {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <Paperclip size={22} />
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
};

export default FileUpload;

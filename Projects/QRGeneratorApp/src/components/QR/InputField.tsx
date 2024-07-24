import React from "react";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <div className="w-full mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text or URL for QR code"
        className="w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-accent focus:outline-none focus:ring"
      />
    </div>
  );
};

export default InputField;

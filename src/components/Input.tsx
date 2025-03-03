import Image from "next/image";
import React from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
  isRequired?: boolean;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({
  label,
  type,
  placeholder,
  id,
  name,
  isRequired,
  value,
  onChange,
}: InputProps) {
  const [inputType, setInputType] = React.useState(type);

  const toggleInputType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="flex-1">
      {label != "" && (
        <label
          htmlFor={id}
          className="block text-sm text-text font-poppins font-normal mb-1"
        >
          {label} {isRequired && <span className="text-primary">*</span>}
        </label>
      )}
      <div className="relative w-full rounded-md border border-text border-opacity-20 focus-within:border-primary transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center px-2 sm:px-4 py-2 h-10 rounded-md bg-darkGray gap-4">
          <input
            type={inputType}
            placeholder={placeholder}
            id={id}
            name={name}
            className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-text font-poppins font-normal"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={toggleInputType}
              className="focus:outline-none"
            >
              <Image src="/eye.png" alt="eye icon" width={20} height={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

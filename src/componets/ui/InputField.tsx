import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  showSearchIcon?: boolean;
  wrapperClassName?: string;
};

export default function InputField({
  label,
  showSearchIcon = false,
  wrapperClassName = "",
  className = "",
  ...inputProps
}: InputFieldProps) {
  return (
    <label className={`flex min-w-0 items-center ${wrapperClassName}`}>
      <span className="sr-only">{label}</span>
      {showSearchIcon && <span aria-hidden="true" className="text-base leading-none">⌕</span>}
      <input
        {...inputProps}
        aria-label={inputProps["aria-label"] ?? label}
        className={`min-w-0 flex-1 bg-transparent outline-none ${className}`}
      />
    </label>
  );
}

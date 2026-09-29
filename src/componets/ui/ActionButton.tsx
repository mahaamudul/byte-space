import type { ButtonHTMLAttributes, ReactNode } from "react";

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function ActionButton({
  children,
  className = "",
  type = "button",
  ...buttonProps
}: ActionButtonProps) {
  return (
    <button
      {...buttonProps}
      type={type}
      className={`rounded-full bg-[#c2f001] font-satoshi font-medium text-[#111827] transition-transform hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}

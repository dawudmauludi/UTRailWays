// components/atoms/Button.tsx
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <button {...rest} className="bg-blue-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
};

export default Button;

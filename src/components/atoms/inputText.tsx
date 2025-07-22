import type React from "react";

type Props =React.InputHTMLAttributes<HTMLInputElement>

const InputText = (props: Props) => {
  return <input {...props} className="border p-2 w-full rounded" />;
};

export default InputText;
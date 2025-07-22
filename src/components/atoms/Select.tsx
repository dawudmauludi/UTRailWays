import React from 'react';

interface SelectProps {
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ id, value, onChange, children }) => (
  <select
    id={id}
    value={value}
    onChange={onChange}
    className="block w-full border border-gray-300 rounded-md p-2"
  >
    {children}
  </select>
);

export default Select;

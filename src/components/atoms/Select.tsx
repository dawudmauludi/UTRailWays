import React from 'react';

interface Props {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const Select: React.FC<Props> = ({ id, value, onChange, options }) => (
  <select id={id} value={value} onChange={onChange} className="w-full border p-2 rounded">
    <option value="">-- Pilih --</option>
    {options.map((option, idx) => (
      <option key={idx} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;

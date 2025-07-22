import React from 'react';
import Label from '../atoms/Label';
import Select from '../atoms/Select';

interface SelectWithLabelProps {
  id?: string;
  label: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectWithLabel: React.FC<SelectWithLabelProps> = ({
  id,
  label,
  value,
  options,
  onChange,
}) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Select id={id} value={value} onChange={onChange}>
      <option value="">-- Pilih --</option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>{option}</option>
      ))}
    </Select>
  </div>
);

export default SelectWithLabel;

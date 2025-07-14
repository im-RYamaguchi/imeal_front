import { OptionData } from "@/app/_interfaces/OptionData";
import React from "react";


interface SelectButtonProps{
  options: OptionData[];
  initialValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// セレクトボタン
const SelectButton = ({options, initialValue, onChange}: SelectButtonProps) => {
  return(
    <select value={initialValue} onChange={onChange}>
      {options.map((opt, index) => (
        <option key={`${index}_${opt.text}`} value={opt.value}>{opt.text}</option>
      ))}
    </select>
  );
};

export default SelectButton;
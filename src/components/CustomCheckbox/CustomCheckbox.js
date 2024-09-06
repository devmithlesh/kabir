import React from "react";
import './CustomCheckbox.css'

const CustomCheckbox = ({
  id,
  labelName,
  isChecked,
  onChange,
  value,
  key,
  className,
  disabled
}) => {

  return (
    <label className={`checboxWrap checkboxMainCustom  ${disabled === true && style.disable} ${className}`} htmlFor={id}>
      <input
        disabled={disabled}
        type="checkbox"
        name={id}
        checked={isChecked}
        onChange={onChange}
        key={key}
        id={id}
        value={value}
      />
      <span className={`checkmarkNew checkmarkWhiteArea`}></span>

      {
        labelName && <p className="text16">{labelName}</p>
      }
    </label>
  );
};

export default CustomCheckbox;

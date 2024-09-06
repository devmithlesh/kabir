import React from "react";
import './Button.css'

const Button = ({
  className,
  onClick,
  name,
  src,
  disabled,
  isWaiting,
  tooltip,
  icon,
}) => {

  return (
    <button
      className={`buttonGlobal button ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
    >
      {src && (
        <img
          src={src}
          alt=""
        />
      )}

      {!isWaiting ? (
        <>
          {name}
          {icon && icon}
        </>
      ) : (
        <div className={'loadingButtonblock'}>
          <span className={`buttonSpinner buttonFillspinner`}></span>
        </div>
      )}
    </button>
  );
};

export default Button;

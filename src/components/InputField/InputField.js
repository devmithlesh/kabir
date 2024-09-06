import React, { useEffect, useRef } from "react";
import './InputField.css'

const InputField = ({
    type,
    className,
    placeholder,
    id,
    labelName,
    onChange,
    disabled,
    value,
    checked,
    isError,
    redImp,
    onKeyPress,
    name,
    min,
    infoIcon,
    onBlur,
    max,
    inputIcon,
    onclick
}) => {
    const inputRef = useRef(null);


    useEffect(() => {
        const handleWheel = (e) => {
            // Check if the input field or any of its descendants are being scrolled
            if (inputRef.current && (inputRef.current === document.activeElement || inputRef.current.contains(document.activeElement))) {
                inputRef.current.blur(); // Blur the input field
            }
        };

        document.body.addEventListener('wheel', handleWheel);

        return () => {
            document.body.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className={`formGroups formGropuwrapper ${isError && 'errorPassClass'}`} >
            <label className={`${infoIcon && 'InputinfoFlexWrap'}`} htmlFor={id}>
                {labelName}

                {infoIcon &&
                    <div className="tdTooltipblock tooltipScrollwrap">
                        <img src="/svg/infoIcon.svg" alt="" className="pointer" />
                        <div className="tdTooltipWrappertext">
                            <span class="tdTooltippassage">{infoIcon}</span>
                        </div>
                    </div>
                }

                {redImp && <span className={'impRed'}> *</span>}
            </label >

            <input
                type={type}
                className={`${className} ${isError && 'borderred'}`}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
                disabled={disabled}
                value={value}
                onChange={onChange}
                id={id}
                checked={checked}
                name={name}
                min={min}
                onBlur={onBlur}
                max={max}
            />

            {isError && <span className={'formError'}>{isError}</span>}

            {
                inputIcon && (
                    <span className="inputIcon" onClick={onclick}>{inputIcon}</span>
                )
            }

        </div >
    );
};

export default InputField;

import React from 'react';

const Select = ({id, name, label, defaultValue, options, value, onChange}) => {
    return (
        <>
            {label ? <label for={id}>{label}</label> : null}
            <select
                id={id}
                name={name}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                {defaultValue ? <option selected disabled value="">{defaultValue}</option> : null}
                {options.map(option =>
                    <option value={option.value} key={option.value} >
                        {option.contents}
                    </option>
                )}

            </select>
        </>
    );
};

export default Select;
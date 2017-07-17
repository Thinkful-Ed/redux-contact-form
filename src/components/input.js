import React from 'react';

export default function Input(props) {
    const Element = props.element || 'input';

    let error;
    if (props.meta.touched && props.meta.error) {
        error = <div className="form-error">{props.meta.error}</div>;
    }

    let warning;
    if (props.meta.touched && props.meta.warning) {
        warning = <div className="form-warning">{props.meta.warning}</div>;
    }

    return (
        <div className="form-input">
            <label htmlFor={props.input.name}>{props.label}</label>
            <Element {...props.input} id={props.input.name} type={props.type} />
            {error}
            {warning}
        </div>
    );
}

import React from 'react';
import { observer } from 'mobx-react';

export default observer(function ({ field, component = 'input', componentClassName = '', ...otherProps }) {
    return (
        <React.Fragment>
            <label htmlFor={field.id}>
                {field.label}
            </label>
            {React.createElement(component, { ...field.bind(), className: componentClassName, ...otherProps })}
            <p>{field.error}</p>
        </React.Fragment>
    )
})
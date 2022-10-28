import React from 'react';

const Alert = ({condition, message}) => {
    return (
        <div className={'alert-container'}>
            {condition && <p className={'alert-message'}>{message}</p>}
        </div>
    );
};

export default Alert;
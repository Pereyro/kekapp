import React from 'react';
import classes from './KekButton.module.css';


const KekButton = (props) => {
    const { children, ...otherProps } = props;

    return (
        <button {...otherProps} className={classes.btn}>{children}</button>
    )
};

export default KekButton; 
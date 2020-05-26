import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import './Alert.scss';

const Alert = ({ message }) => {
    return (
        <div className="alert-base">
            <MuiAlert elevation={4} variant="filled" severity="error"> {message} </MuiAlert>
        </div>
    )
}

export default Alert;
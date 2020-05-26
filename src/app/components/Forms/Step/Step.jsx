import React, { useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core'
import { notEmptyString } from '../../../utils/validation';
import Alert from '../../Alert/Alert';
import { useForm, useStep } from "react-hooks-helper";


const Step = ({ setFormData, formData, step, navigation, title, fields }) => {
    const { next, previous }  = navigation;

    const alertSettings = {
        visible: false, 
        message: 'Fill required fields correctly', 
        fields: fields.reduce((acc, key) => {
            acc[key] = false;
            return acc;
        },{})
    }
    
    const [errorSettings, setErrorSettings] = useState(alertSettings)

    const validate = () => fields.every(field => notEmptyString(formData[field]));

    const showError = () => setErrorSettings((settings) => {
        return {
            ...settings,
            visible: true,
            fields: fields.reduce((acc, key) => {
                acc[key] = !notEmptyString(formData[key]);
                return acc;
            },{})}
    });

    const validateFields = () => validate() ? next() : showError()

    return (
        <div className="base-form">
            <h3>{ title }</h3>
            { errorSettings.visible && <Alert message={ errorSettings.message }/>}
            { fields.map((key, i) => <TextField id="standard-basic" key={i} name={key} value={formData[key]} error={errorSettings.fields[key]} required onChange={setFormData} aria-label={`type a ${key}`} label={key} />)}
            <div className="base-form--buttons">
                {step !== 0 && <Button variant="outlined" color="primary" onClick={previous}>Previous</Button>}
                <Button variant="outlined" color="primary" onClick={validateFields}>Next</Button>
            </div>
        </div>
    )
}

Step.defaultProps = {
    title: "Please fill all required data"
}

export default Step;
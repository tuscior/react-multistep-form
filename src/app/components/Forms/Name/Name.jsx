import React, { useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core'
import { notEmptyString } from '../../../utils/validation';
import Alert from '../../Alert/Alert';

const alertSettings = {
    visible: false, 
    message: 'Fill required fields correctly', 
    fields: {
        firstName: false,
        lastName: false
    }
}

const Name = ({ setFormData, formData, step, navigation, title }) => {
    const { next, previous }  = navigation;
    const [errorSettings, setErrorSettings] = useState(alertSettings)

    const validateFields = () => (notEmptyString(formData.lastName) && notEmptyString(formData.firstName) && next()) || setErrorSettings((settings) => ({
        ...settings,
        visible: true,
        fields: {
            firstName: !notEmptyString(formData.firstName),
            lastName: !notEmptyString(formData.lastName)
        }
    }));


    return (
        <div class="base-form">
            <h3>{ title }</h3>
            { errorSettings.visible && <Alert message={ errorSettings.message }/>}
            <TextField id="standard-basic" name="firstName" value={formData.firstName} error={errorSettings.fields.firstName} required onChange={setFormData} aria-label="type an first name" label="First Name" />
            <TextField id="standard-basic" name="lastName" value={formData.lastName} error={errorSettings.fields.lastName} required onChange={setFormData} aria-label="type an last name" label="Last Name" />
            <div className="base-form--buttons">
                <Button variant="outlined" color="primary" onClick={validateFields}>Next</Button>
            </div>
        </div>
    )
}

Name.defaultProps = {
    title: "Fill your first and second name info:"
}

export default Name;
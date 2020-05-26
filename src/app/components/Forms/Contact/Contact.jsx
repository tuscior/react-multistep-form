import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { isEmail, notEmptyString } from '../../../utils/validation';
import Alert from '../../Alert/Alert';

const alertSettings = {
    visible: false, 
    message: 'Fill required fields correctly', 
    fields: {
        email: false,
        mobile: false
    }
}
const Contact = ({ setFormData, formData, step, navigation, title}) => {
    const { next, previous } = navigation;
    const [errorSettings, setErrorSettings] = useState(alertSettings)
    const validateFields = () => (isEmail(formData.email) && notEmptyString(formData.mobile) && next()) || setErrorSettings((settings) => ({
        ...settings,
        visible: true,
        fields: {
            email: !isEmail(formData.email),
            mobile: !notEmptyString(formData.mobile)
        }
    }));
    return (
        <div className="base-form">
            <h3>{ title }</h3>
            { errorSettings.visible && <Alert message={ errorSettings.message }/>}
            <TextField id="standard-basic" name="email" value={formData.email} error={errorSettings.fields.email} required onChange={setFormData} aria-label="type an email" label="Email" />
            <TextField id="standard-basic" name="mobile" value={formData.mobile} error={errorSettings.fields.mobile} required onChange={setFormData} aria-label="type a mobile number" label="Mobile" />
            <div className="base-form--buttons">
                <Button variant="outlined" color="primary" onClick={previous}>Previous</Button>
                <Button variant="outlined" color="primary" onClick={validateFields}>Next</Button>
            </div>
        </div>    
    )
}

Contact.defaultProps = {
    title: "Fill your contact info:"
}
export default Contact;
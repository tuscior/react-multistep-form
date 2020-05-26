import React, {useState } from 'react';
import { TextField, Button, Icon } from '@material-ui/core';
import { notEmptyString, isZip } from '../../../utils/validation';
import Alert from '../../Alert/Alert';

const alertSettings = {
    visible: false, 
    message: 'Fill required fields correctly', 
    fields: {
        country: false,
        city: false,
        zip: false,
        street: false,
    }
}

const Address = ({ setFormData, formData, step, navigation, title }) => {
    const { next, previous } = navigation;
    const [errorSettings, setErrorSettings] = useState(alertSettings)

    const validateFields = () => ([formData.country, formData.city, formData.street].every(notEmptyString) && isZip(formData.zip) && next()) || setErrorSettings((settings) => ({
        ...settings,
        visible: true,
        fields: {
            country: !notEmptyString(formData.country),
            city: !notEmptyString(formData.city),
            street: !notEmptyString(formData.street),
            zip: !isZip(formData.zip)
        }
    }));

    return (
        <div class="base-form">
            <h3>{ title }</h3>
            { errorSettings.visible && <Alert message={ errorSettings.message }/>}
            <TextField id="standard-basic" name="country" value={formData.country} required error={errorSettings.fields.country} onChange={setFormData} aria-label="type a country"  label="Country" />
            <TextField id="standard-basic" name="city" value={formData.city} required error={errorSettings.fields.city}  onChange={setFormData} aria-label="type an email"  label="City" />
            <TextField id="standard-basic" name="zip" value={formData.zip} required  error={errorSettings.fields.zip} onChange={setFormData} aria-label="type a zip"  label="Zip Code" />
            <TextField id="standard-basic" name="street" value={formData.street} required error={errorSettings.fields.street}  onChange={setFormData} aria-label="type a street"  label="Street" />
            <div className="base-form--buttons">
                <Button variant="outlined" color="primary" onClick={previous}>Previous</Button>
                <Button variant="outlined" color="primary" onClick={validateFields}>Next</Button>
            </div>
        </div>
    )
}

Address.defaultProps = {
    title: "Fill your address info:"
}

export default Address;
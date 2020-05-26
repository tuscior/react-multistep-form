import React from 'react';
import { sendFormData } from '../../../actions/index'
import { TextField, Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
const Review = ({ formData, step, navigation, title }) => {

    const onSubmit = async (ev) => {
        ev.preventDefault();
        try {
            await sendFormData()
            go("thankyou")
        } catch(err){
            console.log(err)
        }
    }

    const { go } = navigation;
        return (
            <div className="base-form base-form--review">
                <h3>{ title }</h3>
                <h4><p>Name</p><Button variant="outlined" size="small" onClick={() => go("name")}>Edit</Button></h4>
                    <div>First name: {`${formData.firstName}`},Last Name: {`${formData.lastName}`},</div>
                <h4><p>Address</p><Button variant="outlined" size="small"  onClick={() => go("address")}>Edit</Button> </h4>
                    <div>
                        Address: {`${formData.country}`},
                        City: {` ${formData.city}`},
                        State: {`${formData.street}`},
                        ZIP: {`${formData.zip}`}
                    </div>
                <h4><p>Contact</p><Button variant="outlined" size="small"  onClick={() => go("contact")}>Edit</Button></h4>
                    <div> Phone: {`${formData.mobile}`}, E-mail: {`${formData.email}`}</div>
                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onSubmit}
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </div>
    )
}

Review.defaultProps = {
    title: "Review your info"
}


export default Review;
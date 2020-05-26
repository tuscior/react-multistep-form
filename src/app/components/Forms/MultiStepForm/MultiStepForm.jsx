import React from 'react';

import { useForm, useStep } from "react-hooks-helper";

import Name from '../Name/Name';
import Address from '../Address/Address';
import Contact from '../Contact/Contact';
import ThankYou from '../ThankYou/ThankYou';
import Review from '../Review/Review';
import '../baseFormStyles.scss'


const MultiStepForm = ({ steps, data }) => {
    const [formData, setFormData] = useForm(data)
    const { step, navigation } = useStep({ initialStep:0, steps })

    const { id } = step;
    
    const props = { 
        setFormData,
        formData,
        step,
        navigation
    }
    
    switch(id) {
        case "name":
            return <Name {...props} />
        case "address":
            return <Address {...props} />
        case "contact":
            return <Contact {...props} />
        case "thankyou":
            return <ThankYou {...props} />
        case "review":
            return <Review {...props} />
        default:
            return null;
    }
}

export default MultiStepForm;
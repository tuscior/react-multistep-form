import React from 'react';

import { useForm, useStep } from "react-hooks-helper";

import Step from '../Step/Step';
import Review from '../Review/Review';
import Thankyou from '../ThankYou/ThankYou';
import useNavigation from '../../../hooks/index';

import '../baseFormStyles.scss'


const MultiStepForm = ({ steps, data }) => {
    const [formData, setFormData] = useForm(data)
    const { step, navigation } = useStep({ initialStep:0, steps })

    const { id, fields } = step;
    const props = { 
        setFormData,
        formData,
        fields,
        navigation,
        step
    }
    
    switch(id) {
        case "review":
            return <Review {...props} />
        case "thankyou":
            return <Thankyou {...props} />
        default:
            return <Step {...props} />
    }
}

export default MultiStepForm;
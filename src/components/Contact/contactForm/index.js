import React, { useState } from "react";
import InputBox from "../../InputBox";
import TextAreaBox from '../../InputBox/textArea';
import CustomButton from '../../customButton';
import { ReactComponent as RightArrow } from '../../../Assest/arrow_right.svg';
import ErrorMessage from '../../Toast';
import {EmailBox,FormSubmitButton} from '../styleComponent';
const ContactForm = () => {
    const [error, setError] = useState(false)
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = (e) => {
        setError(false)
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formDetails.email && formDetails.name) {

            console.log(formDetails, 'formDetails');
        } else {
            setError(true)
        }
    }
    return (
        <>
                   
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mb-4 justify-content-between m-0">
                    <div className='col-lg-6 px-0'>
                        <InputBox className='w-100' type='text' placeholder='YOUR NAME' handleChange={handleChange} name='name' />
                    </div>
                    <EmailBox className='col-lg-6 px-0  m-0'>
                        <InputBox className='w-100' type='email' placeholder='YOUR EMAIL' handleChange={handleChange} name='email' />
                    </EmailBox>
                    
                </div>
                <InputBox type='text' placeholder='YOUR SUBJECT' handleChange={handleChange} name='subject' />
                <TextAreaBox type='text' placeholder='YOUR MESSAGE' handleChange={handleChange} name='subject'></TextAreaBox>
                <ErrorMessage />
                <FormSubmitButton>
                <CustomButton
                    text='SEND MESSAGE'
                    icon={<i class="fa fa-send-o"></i>}
                    marginLeft='0px'
                    width={'230px'}
                />
                </FormSubmitButton>

            </form>
        </>
    )
}

export default ContactForm;
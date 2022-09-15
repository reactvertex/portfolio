import React, { useState } from "react";
import InputBox from "../../InputBox";
import TextAreaBox from '../../InputBox/textArea';
import CustomButton from '../../customButton';
import { ReactComponent as RightArrow } from '../../../Assest/arrow_right.svg';

const ContactForm = () => {
    const [formDetails, setFormDetails] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = (e) => {
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {

    }
    return (

        <form onSubmit={() => handleSubmit()}>
            <div className="row mb-4 justify-content-between m-0">
                <div className='col-lg-6 px-0'>
                    <InputBox className='w-100' type='text' placeholder='YOUR NAME' handleChange={handleChange} name='name' />
                </div>
                <div className='col-lg-6  m-0'>
                    <InputBox className='w-100' type='text' placeholder='YOUR EMAIL' handleChange={handleChange} name='email' />
                </div>
            </div>
            <InputBox type='text' placeholder='YOUR SUBJECT' handleChange={handleChange} name='subject' />
            <TextAreaBox type='text' placeholder='YOUR MESSAGE' handleChange={handleChange} name='subject'></TextAreaBox>
            <CustomButton
                text='SEND MESSAGE'
                icon={<i class="fa fa-send-o"></i>}
                marginLeft='0px'
            />
            
        </form>
    )
}

export default ContactForm;
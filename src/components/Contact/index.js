import React from "react";
import { ContactContent, } from './styleComponent';
import PageHeader from '../PageHeader';

const ContactPage = () => {
    return (
        <ContactContent className="row">
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="CONTACT" subTitle1='GET IN' subTitle2='TOUCH' />
            </div>
        </ContactContent>
    )
}
export default ContactPage
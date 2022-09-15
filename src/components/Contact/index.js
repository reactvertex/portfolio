import React from "react";
import { ContactContent, ContactHeading, ContactDescription, ContanctWrapper,UserDetailsIcon,UserDetailsHeading,UserDetailsDetails } from './styleComponent';
import {userinfo} from '../../Constant/Contact';
import PageHeader from '../PageHeader';
import ContactForm from "./contactForm";


const ContactPage = () => {
    return (
        <ContactContent className="row mx-0">
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="CONTACT" subTitle1='GET IN' subTitle2='TOUCH' />
            </div>
            <div className='col-lg-5 col-sm-12 m-0' style={{height : '100vh'}}>
                <div className="d-flex  justify-content-center">
                    <ContanctWrapper>
                        <ContactHeading>DON'T BE SHY!</ContactHeading>
                        <ContactDescription className="mt-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</ContactDescription>
                        {userinfo.map(({index ,label ,details,Icon }) =>(
                            <div className="d-flex mt-3">
                                <UserDetailsIcon className="d-flex flex-initial align-items-center">{Icon}</UserDetailsIcon>
                                <div className="px-5 mx-3">
                                    <UserDetailsHeading>{label}</UserDetailsHeading>
                                    <UserDetailsDetails>{details}</UserDetailsDetails>
                                </div>
                            </div>
                        ))}
                    </ContanctWrapper>
                </div>
            </div>
            <div className='col-lg-7 col-sm-12 m-0'>
                <ContactForm />
            </div>
        </ContactContent>
    )
}
export default ContactPage
import React, {useEffect} from "react";
import { FormContainerWrapper, ContactContent, ContactHeading, ContactDescription, ContanctWrapper, UserDetailsIcon, UserDetailsHeading, UserDetailsDetails, UserDetailsContainer } from './styleComponent';
import { userinfo } from '../../Constant/Contact';
import PageHeader from '../PageHeader';
import ContactForm from "./contactForm";


const ContactPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = false;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return (
        <ContactContent className="row mx-0">
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="CONTACT" subTitle1='GET IN' subTitle2='TOUCH' />
            </div>
            {/* <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
            <FormContainerWrapper className='col-lg-5 col-sm-12 m-0'>
                <div className="d-flex  justify-content-center">
                    <ContanctWrapper>
                        <ContactHeading>DON'T BE SHY!</ContactHeading>
                        <ContactDescription className="mt-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</ContactDescription>
                        {userinfo.map(({index ,label ,details,Icon }) =>(
                            <div className="d-flex mt-3">
                                <UserDetailsIcon className="d-flex flex-initial align-items-center">{Icon}</UserDetailsIcon>
                                    <UserDetailsContainer className="mx-3">
                                    <UserDetailsHeading>{label}</UserDetailsHeading>
                                    <UserDetailsDetails>{details}</UserDetailsDetails>
                                    </UserDetailsContainer>
                            </div>
                        ))}
                    </ContanctWrapper>
                </div>
            </FormContainerWrapper>
            <div className='col-lg-7 col-sm-12 m-0'>
            <div class="visme_d" data-title="Untitled Project" data-url="8r6768yk-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="18397"></div>
                {/* <ContactForm /> */}
            </div>
        </ContactContent>
    )
}
export default ContactPage;
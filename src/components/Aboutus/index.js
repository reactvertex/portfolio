import React from 'react';
import PageHeader from '../PageHeader';
import { AboutusContainer, AboutusPageContent } from './styleComponent';
import PersonalInformation from './PersonalInformation';
import SKillsComponent from './SkillsComponent';
import AllExperience from './Expericene';

const Aboutus = () => {
    return (
        <AboutusPageContent className='row'>
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="RESUME" subTitle1='ABOUT' subTitle2='ME' />
                <PersonalInformation />
                <SKillsComponent />
                <AllExperience />
            </div>
        </AboutusPageContent>
    )
}

export default Aboutus;
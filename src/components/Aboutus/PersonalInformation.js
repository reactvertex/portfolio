import React from "react";
import { PersonalInfo, PersonalContainer, PersonalDetails, DetailBox } from './styleComponent';
import { personInfoonAboutus, careerDetails } from './constant';
import CustomButton from '../customButton';
import { ReactComponent as DownloadCv } from '../../Assest/download.svg';
import ExampleDoc from '../../Assest/resume/Sandip_resume.pdf'
import HorizentalLine from '../HorizentalLine';

const PersonalInformation = () => {
    return (
        <PersonalContainer className="container">
            <div className="row no-gutters">
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <PersonalInfo className="">
                        <h3 className="text-uppercase custom-title mb-0 ft-wt-600">Personal Info </h3>
                        <div className="pt-3 row d-flex flex-wrap">
                            {personInfoonAboutus.map((val, index) => (
                                <PersonalDetails className="py-1 col-6">
                                    <span style={{ color: '#fff', opacity: .5 }}>{val.label}</span>:  <span style={{ color: '#FFFFFF', wordBreak: 'break-all' }}>{val.value}</span>
                                </PersonalDetails>
                            ))}
                        </div>
                        <div className="mt-5">
                            <a href={ExampleDoc} download="Sandip_resume" target='_blank' style={{textDecoration : 'none'}}>
                                <CustomButton
                                    text='DOWNLOAD CV'
                                    icon={<DownloadCv />}
                                    marginLeft='0px'
                                />
                            </a>
                        </div>

                    </PersonalInfo>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div className="row">
                        {careerDetails.map(val => (
                            <div className="col-lg-6 col-md-6">
                                <DetailBox>
                                    <h3>{val.value}</h3>
                                    <p>{val.label}</p>
                                </DetailBox>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <HorizentalLine />
        </PersonalContainer>
    )
}

export default PersonalInformation;
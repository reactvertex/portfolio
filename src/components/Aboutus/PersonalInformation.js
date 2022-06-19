import React from "react";
import { PersonalInfo, PersonalContainer,PersonalDetails,DetailBox} from './styleComponent';
import { personInfoonAboutus,careerDetails } from './constant';

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
                                    <span style={{color :'#fff', opacity: .5}}>{val.label}</span>:  <span style={{color : '#FFFFFF'}}>{val.value}</span>
                                </PersonalDetails>
                            ))}
                        </div>
                    </PersonalInfo>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-12">
                    <div className="row">
                        {careerDetails.map(val =>(
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
        </PersonalContainer>
    )
}

export default PersonalInformation;
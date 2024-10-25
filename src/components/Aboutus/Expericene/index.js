import React from "react";
import { ExperienceSection, ExperienceHeader, IconSection, ExpDetailBox, YearLabel, DetailSection,JobTitle ,JobDetails} from '../styleComponent';
import VerticalLine from '../../VerticalLine';
import {ExpDetail} from '../constant';

const AllExperience = () => {
    return (
        <ExperienceSection>
            <ExperienceHeader className="text-uppercase py-4 text-center">Experiences</ExperienceHeader>
            <div  className="row no-gutters experience">
                {ExpDetail.map((kl) => (
                    <ExpDetailBox  className="col-lg-6 col-sm-12 col-md-12 d-flex  mt-4" style={{ position: 'relative' }}>
                        <IconSection>
                            <i className="fa fa-briefcase"></i>
                            <VerticalLine margin='32px 25px'></VerticalLine>
                        </IconSection>
                        <DetailSection  data-aos-delay="1000" className='mx-3'>
                            <YearLabel>{kl.duration}</YearLabel>
                            <JobTitle>{kl.profile}  - <span>{kl.company}</span>  </JobTitle>
                            <JobDetails>{kl.jobDetails.point1}</JobDetails>
                            <JobDetails>{kl.jobDetails.point2}</JobDetails>
                            <JobDetails>{kl.jobDetails.point3}</JobDetails>
                        </DetailSection>
                    </ExpDetailBox>
                ))}
            </div>

        </ExperienceSection>
    )
}
export default AllExperience;
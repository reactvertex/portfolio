import React from "react";
import { HomeSection, UserName, AboutButton, ProfileDetails } from './StyleComponent';
import { userDetails } from './constant';
import { ReactComponent as RightArrow } from '../../Assest/arrow_right.svg';
import CustomButton from '../customButton';

const HomePage = () => {
    return (
        <HomeSection className="row no-gutters">
            <div className="col-lg-5 col-sm-12" ></div>
            <div className="col-lg-7 col-sm-12">
                <div className="d-flex flex-column justify-content-center  h-100">
                    <UserName className="text-uppercase ">{userDetails.name} <span>{userDetails.profile}</span></UserName>
                    <ProfileDetails>{userDetails.profileDetails}</ProfileDetails>
                    <CustomButton
                        text={userDetails.buttonText}
                        icon={<RightArrow />}
                    />
                </div>
            </div>
        </HomeSection>
    )
}
export default HomePage; 
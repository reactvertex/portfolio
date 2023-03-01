import React from "react";
import { HomeSection, UserName, AboutButton, ProfileDetails,UserInfo } from './StyleComponent';
import { userDetails } from './constant';
import { ReactComponent as RightArrow } from '../../Assest/arrow_right.svg';
import CustomButton from '../customButton';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/about')
    }
    return (
        <HomeSection className="row no-gutters mx-0">
            <div className="col-lg-5 col-sm-12" ></div>
            <div className="col-lg-7 col-sm-12">
                <UserInfo className="d-flex flex-column justify-content-center h-100">
                {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="white" data-type="VERTICAL" data-vanity="sandip-sharma-3771b8127" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sandip-sharma-3771b8127?trk=profile-badge">Sandip Sharma</a></div> */}
                    <UserName className="text-uppercase badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="white" data-type="VERTICAL" data-vanity="sandip-sharma-3771b8127" data-version="v1"><a target="_blank" href="https://in.linkedin.com/in/sandip-sharma-3771b8127?trk=profile-badge">{userDetails.name} </a><span>{userDetails.profile}</span></UserName>
                    <ProfileDetails>{userDetails.profileDetails}</ProfileDetails>
                    <CustomButton
                        text={userDetails.buttonText}
                        icon={<RightArrow />}
                        marginLeft='20px'
                        handleClick={handleClick}
                        width={'230px'}
                    />
                </UserInfo>
            </div>
        </HomeSection>
    )
}
export default HomePage; 
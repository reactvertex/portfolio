import React from "react";
import { HomeSection, UserName, ProfileDetails,UserInfo } from './StyleComponent';
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
                    <UserName data-aos="fade-right" data-aos-delay="500" className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="white" data-type="VERTICAL" data-vanity="sandip-sharma-3771b8127" data-version="v1"><a target="_blank" href="https://in.linkedin.com/in/sandip-sharma-3771b8127?trk=profile-badge">{userDetails.name} </a><p>{userDetails.profile}</p></UserName>
                    <ProfileDetails data-aos="fade-left" data-aos-delay="1000"  >{userDetails.profileDetails}</ProfileDetails>
                    <CustomButton
                        dataAos='fade-right'
                        dataAosdelay="1200"
                        text={userDetails.buttonText}
                        icon={<RightArrow />}
                        marginLeft='70px'
                        handleClick={handleClick}
                        width={'230px'}
                    />
                </UserInfo>
            </div>
        </HomeSection>
    )
}
export default HomePage; 
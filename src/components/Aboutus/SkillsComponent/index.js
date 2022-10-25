import React, { useEffect, useState } from "react";
import SkillGraph from './Graph';
import HorizentalLine from '../../HorizentalLine';
import { skillList } from '../constant';
import { SkillsContainers, SkillsHeader, ExpandedSection } from './styleComponent';
import CustomButton from '../../customButton';

const SKillsComponent = () => {
    const [isClicked , setIsClicked] = useState(false);
    const [updatedSkill, setUpdatedSkill] = useState(skillList)
    useEffect(() =>{
     if (!isClicked) {
       const shortSkill = skillList.slice(0, 4);
       setUpdatedSkill(shortSkill)
     } else {
        setUpdatedSkill(skillList) 
     }
    },[isClicked])
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <SkillsContainers className='mx-5' >
            <SkillsHeader className="text-uppercase pb-4 text-center ">MY SKILLS</SkillsHeader>
            <div className="d-flex justify-content-between flex-wrap">
                {updatedSkill.map(val => (
                    <SkillGraph val={val} />
                ))}
            </div>
            <ExpandedSection className="d-flex justify-content-end">
                <CustomButton
                    text={isClicked ? 'less' : 'More'}
                    icon={<i className="fa fa-caret-down"></i>}
                    marginLeft='30px'
                    handleClick={handleClick}
                    width={'130px'}
                />
            </ExpandedSection>
            <HorizentalLine />
        </SkillsContainers>
    )
}
export default SKillsComponent;
import React from "react";
import { PortfolioContent, ProHeader, HeaderContent, ProjectContent, ProjectDetails, HoverContent,ProjectContainer } from './styleComponents';
import { contentList, projectContentsList } from './Constant';
import { useState } from "react";
import { useEffect } from "react";

const ProjectList = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const [hoverDetails, setHoverDetails] = useState({});
    const [updatedProContentsList, setUpdatedProContentsList] = useState([])
    useEffect(() => {
        if (selectedItem) {
            if (selectedItem === 'All') {
                setUpdatedProContentsList(projectContentsList)
            } else {
                const finalProjectList = projectContentsList.filter(val => val.technologies === selectedItem)
                setUpdatedProContentsList(finalProjectList)
            }
        }
    }, [selectedItem])
    const handleActive = (item) => {
        setSelectedItem(item)
    }
    const handleProjectPreview = (url) =>{
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <PortfolioContent>
            <ProHeader className="d-flex justify-content-center">
                {contentList.map((item) => (
                    <HeaderContent className="proHeaderList" textColor={item == selectedItem ? '#ffb400' : '#fff'} onClick={() => handleActive(item)}>{item}</HeaderContent>
                ))}
            </ProHeader>
            <ProjectContainer className='d-flex  flex-wrap' >
                {updatedProContentsList.map((val, index) => (
                    <ProjectDetails className="col-lg-4  my-4" onClick={() =>handleProjectPreview(val.url)}>
                        {hoverDetails?.isHover == true && hoverDetails.index == index ?
                            <HoverContent className="d-flex justify-content-center align-items-center">
                                <div className="text-center">{val.label}</div>
                            </HoverContent> :
                            <ProjectContent
                                onMouseEnter={() => setHoverDetails({ isHover: true, index: index })}
                                onMouseLeave={() => setHoverDetails({ isHover: false, index: '' })}
                                src={val.img} alt={val.alt} >
                            </ProjectContent>
                        }
                    </ProjectDetails>
                ))}
            </ProjectContainer>
        </PortfolioContent>
    )
}

export default ProjectList;
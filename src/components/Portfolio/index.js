import React from "react";
import PageHeader from '../PageHeader';
import ProjectList from './Projectlist';
import {PortfolioPageContent} from './styleComponents';

const PortfolioPage = () => {
    return (
        <PortfolioPageContent className='row'>
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="WORKS" subTitle1='MY' subTitle2='PORTFOLIO' />
                <ProjectList />
            </div>
        </PortfolioPageContent>
    )
}
export default PortfolioPage;
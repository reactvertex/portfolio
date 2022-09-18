import React from "react";
import { BlogContent } from './styleComponents';
import PageHeader from '../PageHeader';

const BlogPage = () => {
    return (
        <BlogContent className="row">
            <div className='col-lg-12 col-sm-12 m-0'>
                <PageHeader title="POSTS" subTitle1='MY' subTitle2='BLOG' />
                <div style={{height : '100vh '}}></div>
            </div>
        </BlogContent>
    )
}
export default BlogPage;
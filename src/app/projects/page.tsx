import React from 'react'
import PublicLayout from '@/layouts/PublicLayout';
import PageTitle from '@/components/PageTitle';
import ProjectsGrid from './components/ProjectsGrid'; 

const Index = () => {
    return (
        <PublicLayout>
            <div className="about-page">
                <PageTitle pageTitle="Projects" pageRoute="/projects" pageRouteLabel="Projects" />
                <ProjectsGrid classes="extra-bg"/>

                {/* <Skills classes="extra-bg" />
                <Experiences />
                <Contact classes="extra-bg" /> */}
            </div>
        </PublicLayout>
    )
}

export default Index
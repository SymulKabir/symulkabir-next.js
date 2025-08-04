import React from 'react'
import PublicLayout from '@/layouts/PublicLayout';
import PageTitle from '@/components/PageTitle';
import Testimonial from '@/components/Testimonial';
import Experiences from '@/components/Experiences';
import Contact from '@/components/Contact';
import AboutMe from '@/app/about/components/AboutMe';
import EducationAndExperience from '@/app/about/components/EducationAndExperience';


const Index = async () => {
    return (
        <PublicLayout>
            <div className="about-page">
                <PageTitle pageTitle="About Me" pageRoute="/about" pageRouteLabel="About" />
                <AboutMe />
                <EducationAndExperience />
                <Experiences classes="extra-bg" />
                <Testimonial />
                <Contact classes="extra-bg" />
            </div>
        </PublicLayout>
    )
}

export default Index
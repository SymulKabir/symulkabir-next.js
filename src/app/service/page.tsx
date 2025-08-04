import React from 'react'
import PublicLayout from '@/layouts/PublicLayout';
import PageTitle from '@/components/PageTitle';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';

const Index = () => {
    return (
        <PublicLayout>
            <div className="about-page">
                <PageTitle pageTitle="Services" pageRoute="/service" pageRouteLabel="Service" />
                <Skills classes="extra-bg" />
                <Experiences />
                <Contact classes="extra-bg" />
            </div>
        </PublicLayout>
    )
}

export default Index
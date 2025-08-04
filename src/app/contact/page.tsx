import React from 'react'
import PublicLayout from '@/layouts/PublicLayout';
import PageTitle from '@/components/PageTitle';
import Contact from '@/components/Contact';
import ContactInfo from '@/app/contact/components/ContactInfo';

const Index = () => {
    return (
        <PublicLayout>
            <div className="contact-page">
                <PageTitle pageTitle="Contact Me" pageRoute="/contact" pageRouteLabel="Contact" />
                <ContactInfo  />
                <Contact />
            </div>
        </PublicLayout>
    )
}

export default Index
import React from 'react'
import Link from 'next/link'
import './styles.scss'
import CircleThem from '@/components/CircleThem';

interface PageProps {
    pageTitle: string;
    pageRoute: string;
    pageRouteLabel: string;
}


const Index: React.FC<PageProps> = ({ pageTitle, pageRoute, pageRouteLabel }) => {
    return (
        <div className='page-title-section section-px'>
            <h2>{pageTitle}</h2>
            <ul className='page-nav-list d-flex'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href={pageRoute}>{pageRouteLabel}</Link>
                </li>
            </ul>
            <CircleThem position="half-right-bottom" />
        </div>
    )
}

export default Index
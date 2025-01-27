import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import CircleThem from '@/components/CircleThem';
import './styles.scss'


interface IndexProps {
    children: ReactNode;
}

const Index: React.FC<IndexProps> = ({ children }) => {
    return <div className='public-layout'>
        <CircleThem position='half-left-top' />
        <Header />
        {children}

    </div>
}

export default Index

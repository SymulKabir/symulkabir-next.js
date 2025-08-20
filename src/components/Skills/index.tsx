import React from 'react'
import './styles.scss' 
import Slider from './components'
import siteData from '@/shared/constants/siteData';
 


const Index = ({classes = ""}) => { 
    return (
        <section className={`skills-section section-px ${classes}`}>
            <div className='skills-inner-wrapper container'>
                <div className='section-title'>
                    <h2 >My skills</h2>
                    <h3>Skills I Bring to the Table.</h3>
                </div>
                <Slider skills={siteData?.skills}  />
            </div>
        </section>
    )
}

export default Index
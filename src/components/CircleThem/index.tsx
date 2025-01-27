import React from 'react'
import './styles.scss'

interface IndexProps {
    position: string;  
  }


const Index: React.FC<IndexProps> = ({position}) => {
    return (
        <div className={`circle-them ${position}`}>
            <div className='circle-wrapper'>
                <span />
                <span />
                <span />
            </div>
        </div>
    )
}

export default Index
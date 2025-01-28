import React from 'react'
import './styles.scss'
import Frontend from '@/assets/images/home/fronteend.webp'
import Image from 'next/image';
const skills = [
    {
        name: "DevOps & Cloud Tools",
        skills: [
            "Kubernetes", "Docker", "Jenkins", "Ansible", "CertBot", "GitHub", "AWS", "Nginx", "Docker Hub", "Shell Script", "Custom Git Server"
        ]
    },
    {
        name: "Backend",
        skills: [
            "Micro Service", "Express.js", "Socket.io", "Nest.js", "Flask", "GraphQL", "Mongoose", "MongoDB", "Radius", "RabbitMQ", "Nodemailer", "SMTP Server"
        ]
    },
    {
        name: "Frontend",
        skills: [
            "Micro Frontend", "React.js", "Next.js", "Angular.js", "Redux", "Bootstrap", "Tailwind"
        ]
    },
    {
        name: "Programming Languages & Other",
        skills: [
            "JavaScript", "TypeScript", "Python", "Dart", "PHP", "OpenCV", "NumPy", "Matplotlib", "Pandas"
        ]
    }
];


const Index = () => {
    return (
        <section className='skills-section section-px'>
            <div className='skills-inner-wrapper container'>
                <div className='section-title'>
                    <h2 >My skills</h2>
                    <h3>Skills I Bring to the Table.</h3>
                </div>
                <div className='skill-grid section-my'>
                    {
                        skills.map(({ name, skills }, index) => {
                            return <div className='cart' key={index} >
                                <div className='inner-cart'>
                                    <div className='skill-description'>
                                        <Image src={Frontend} alt="" height="100" width="100" />
                                        <h6>{name}</h6>

                                    </div>
                                    <div className='skills'>
                                        {
                                            !!skills?.length && skills.map((skill, subIndex) => {
                                                return <div key={index + subIndex} className='skills-item'><svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth={0}
                                                    viewBox="0 0 448 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                                                </svg><p>{skill}</p></div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Index
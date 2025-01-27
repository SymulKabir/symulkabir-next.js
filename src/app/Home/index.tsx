import React from 'react'
import PublicLayout from '@/layouts/PublicLayout'
import CircleThem from '@/components/CircleThem'
import './styles.scss'
import Link from 'next/link'

const Index = () => {
    return (
        <PublicLayout>
            <div className='home-page'>
                <div className='home-page-wrapper container'>
                    <div className='hero-container'>
                        <div className='description-section'>
                            <h3>Hello! I'm</h3>
                            <h2>Symul <span className='last-name'>Kabir</span></h2>
                            <h4>( Full-Stack Developer & DevOps Enthusiast )</h4>
                            <p> A passionate full stack developer exploring the world of DevOps. Enthusiastically learning to bridge development and operations while building scalable applications and contributing to open-source projects. </p>
                            <div className='button-section'>
                                <Link href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                    Get Me On Github
                                </Link>
                                <Link href="/">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="currentColor"
                                        className="bi bi-cloud-arrow-down-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                    Download CV
                                </Link>
                            </div>
                        </div>
                        <div className='image-section'>

                        </div>
                    </div>
                </div>

                <CircleThem position='half-left-bottom' />
            </div>
        </PublicLayout>
    )
}

export default Index
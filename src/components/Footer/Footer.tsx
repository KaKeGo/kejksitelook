import React from 'react'
import './footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>

                <div className='left'>
                    <div className='socialMedia'>
                        <a href='https://github.com/KaKeGo'>
                            <GitHubIcon className='icon'/>
                            Github
                        </a>
                        <a href='https://www.linkedin.com/in/daniel-kulesza-ab37a317a/'>
                            <LinkedInIcon className='icon'/>
                            Linkedin
                        </a>
                        <a href='https://www.instagram.com/kakego_kago/'>
                            <InstagramIcon  className='icon'/>
                            Instagram
                        </a>
                    </div>
                </div>

                <div className='right'>
                    <div className='info'>
                        <p>Created by Kakego <span>&copy;</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

import './navbar.scss'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface IState{}
interface IProps{}

const Navbar:React.FC<IProps> = () => {

    const [click, setClick] = useState(false)
    const handleClick = ():void => setClick(!click)

    return (
        <nav className='navbarContainer'>

            <div className='siteName'>
                <Link to={'/'} className='title'>
                    <p>KejkSite</p>
                </Link>
            </div>

            <div className={
                click ? ('left active') : ('left')
            }>
                <ul className='list'>
                    <li>
                        <Link to={`/profile/kake`} className='link'>
                            <AccountBoxRoundedIcon className='emoji'/>
                            <p>Profile</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/projects'} className='link'>
                            <AccountTreeOutlinedIcon className='emoji'/>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to={'/blogs'} className='link'>
                            <AssignmentOutlinedIcon className='emoji'/>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='link'>
                            <ContactMailRoundedIcon className='emoji'/>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='link'>
                            <InfoOutlinedIcon className='emoji'/>
                            About
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='right' onClick={handleClick}>
                {click ?
                    (<CloseRoundedIcon className='hamburger'/>):
                    (<MenuRoundedIcon className='hamburger'/>)

                }

            </div>
        </nav>
    )
}

export default Navbar

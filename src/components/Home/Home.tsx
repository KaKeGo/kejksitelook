import React from "react"
import './home.scss'

interface IState{}
interface IProps{}

const Home:React.FC<IProps> = () => {
    return (
        <div className='homeContainer'>
            <div className='myPage'>
                <h2 className='title'>Its about my page</h2>
                <div className='textField'>
                    orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div className='line'></div>
            <div className='myPage2'>
                <h2 className='title2'>What u cant find on my page?</h2>
                <div className='textField2'>
                    <img src='https://iaphare.org/wp-content/uploads/2018/11/Project-BG-2005.jpg' alt='' className='img'/>
                    <p className='text'>
                        <h3>Projects:</h3>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy
                    </p>
                </div>
                <div className='textField2'>
                    <img src='https://www.thekickassentrepreneur.com/wp-content/uploads/2021/07/Blogging-Platforms.jpeg' alt='' className='img'/>
                    <p className='text'>
                        <h3>Blog:</h3>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import WrappingLetters from 'wrapping-letters-react'
import './css/styles.css'

export default function ProjectButton() {
    return (
        <Link to='/projects/' className="container-projects__button">
            <div className='word_container'>
                <div className='word-bx word__container-first-word'>
                    <WrappingLetters word='Projects' />
                </div>
                <div className='word-bx word__container-second-word'>
                    <WrappingLetters word='Projects' />
                </div>
            </div>
            <span className="border"></span>
        </Link>
    )
}

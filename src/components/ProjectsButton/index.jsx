import React from 'react'
import { Link } from 'react-router-dom'
import './css/styles.css'

export default function ProjectButton({ HomeReaction }) {
    return (
        <Link to='/projects' onClick={HomeReaction} className="container-projects__button">
            <span>Projects</span>
            <span className="border"></span>
        </Link>
    )
}

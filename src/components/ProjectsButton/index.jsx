import React from 'react'
import { Link } from 'react-router-dom'
import './css/styles.css'

export default function ProjectButton() {
    return (
        <Link to='/projects' className="container-projects__button">
            <span>Projects</span>
            <span className="border"></span>
        </Link>
    )
}

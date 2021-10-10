import React from 'react'
import './css/styles.css'

export default function ContainerSections({children}) {
    return (
        <div className="container-sections">
            {children}
        </div>
    )
}

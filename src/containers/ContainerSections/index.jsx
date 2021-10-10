import React from 'react'

const style = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '364px',
}

export default function ContainerSections({children}) {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

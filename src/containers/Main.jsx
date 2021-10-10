import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import BackgroundHeader from '../components/Background-header'
import ProjectButton from '../components/ProjectsButton'
import TittleHeader from '../components/TitleHeader'
import ContainerSections from './ContainerSections/index'

export default function Main() {
    {/* <nav></nav> */}
    {/* <header> */}
      {/* <title></title> */}
      {/* <sections></sections> */}
    {/* </header> */}
    {/* <information> */}
      {/* <route> */}
        {/* <items></items> */}
        {/* <itemSelect></itemSelect> */}
      {/* </route> */}
    {/* </information> */}
    return (
        <BrowserRouter>
            <BackgroundHeader>
              <TittleHeader />
              <ContainerSections>
                <ProjectButton />
              </ContainerSections>
            </BackgroundHeader>
        </BrowserRouter>
    )
}

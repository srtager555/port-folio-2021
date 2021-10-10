import React, { Fragment } from 'react'
import BackgroundHeader from '../components/Background-header'
import ProjectButton from '../components/ProjectsButton'
import TittleHeader from '../components/TitleHeader'
import ContainerSections from './ContainerSections'

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
        <Fragment>
            <BackgroundHeader>
              <TittleHeader />
              <ContainerSections>
                <ProjectButton />
              </ContainerSections>
            </BackgroundHeader>
        </Fragment>
    )
}

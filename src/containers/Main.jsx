import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BackgroundHeader from "../components/Background-header";
import Navbar from "../components/Navbar";
import ProjectButton from "../components/ProjectsButton";
import TittleHeader from "../components/TitleHeader";
import ContainerSections from "./ContainerSections/index";

export default function Main() {
  const [homeState, setHomeState] = useState(false);
  function handleHomeReaction() {
    if (window.location.pathname !== "/") {
      setHomeState(true);
    } else {
      setHomeState(false);
    }
  }

  return (
    <BrowserRouter>
      <Navbar />
      <BackgroundHeader homeState={homeState}>
        <TittleHeader />
        <ContainerSections>
          <ProjectButton
            HomeReaction={() => {
              handleHomeReaction();
            }}
          />
        </ContainerSections>
      </BackgroundHeader>
      {/* <ProjectContainer>
        <Switch>
          <Route exact path="/" component={UWU} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={post} />
          <Route exact component={NotFound} />
        </Switch>
      </ProjectContainer> */}
    </BrowserRouter>
  );
}

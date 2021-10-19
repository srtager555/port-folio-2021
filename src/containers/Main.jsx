import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import BackgroundHeader from "../components/Background-header";
import Navbar from "../components/Navbar";
import ProjectButton from "../components/ProjectsButton";
import TittleHeader from "../components/TitleHeader";
import { blogPost } from "../Context/ContextApi";
import NotFound from "../Routes/NotFound";
import Post from "../Routes/Post";
import Projects from "../Routes/Projects";
import UWU from "../Routes/UWU";
import ContainerSections from "./ContainerSections/index";

export default function Main() {
  const [homeState, setHomeState] = useState(true);
  function handleHomeReaction() {
    setTimeout(() => {
      if (window.location.pathname !== "/") {
        setHomeState(false);
      } else {
        setHomeState(true);
      }
    }, 100);
  }

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setHomeState(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        HomeReaction={() => {
          handleHomeReaction();
        }}
      />
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
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={UWU} />
        <Route
          exact
          path="/projects"
          component={() => <Projects BlogPostContext={blogPost} />}
        />
        <Route
          exact
          path="/projects/:id"
          component={() => <Post BlogPostContext={blogPost} />}
        />
        <Route component={NotFound} />
      </AnimatedSwitch>
    </BrowserRouter>
  );
}

import Helmet from "react-helmet";
import React from "react";
import { LayoutHelmet } from "../../Layouts/HelmetLayout";

export default function UWU() {
  return (
    <LayoutHelmet
      title='Carlos && Ponce'
      description='I am a designer and developer web, this is my portfolio :)'
      url='https://ttager.page/'
      img='https://i.ibb.co/0J2Ntfn/hu-Tao-background-desktop.jpg'
    >
      <div className="container">
        <p
          style={{
            fontFamily: "'Poppins', Verdana",
            textAlign: "center",
          }}
        >
          Día tras día, siempre evolucionando y mejorando.
        </p>
      </div>
    </LayoutHelmet>
  );
}

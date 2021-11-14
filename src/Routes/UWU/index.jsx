import helmet from "helmet";
import React from "react";

export default function UWU() {
  return (
    <div className="container">
      <helmet>
        <title>¿Problemas isomoficos?</title>
        <meta
          name="description"
          content="Ayudenme, Ya estoy hasta la corronilla con el Router"
        />
        <meta name="keywords" content="UWU, isomorfismo, problemas, router" />
        <meta property="og:title" content="The Rock" />
        <meta property="og:type" content="Portafolio" />
        <meta property="og:url" content="https://ttager.page" />
        <meta
          property="og:image"
          content="https://i.ibb.co/QH6hrC1/22470419.jpg"
        />
      </helmet>
      <p
        style={{
          fontFamily: "'Poppins', Verdana",
          textAlign: "center",
        }}
      >
        Día tras día, siempre evolucionando y mejorando.
      </p>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router";
import { ContainerPages } from "../../containers/ContainerPages";
import './css/style.css'

export default function Post() {
  const { id } = useParams();
  return <div className="center">{ContainerPages.id}</div>;
}

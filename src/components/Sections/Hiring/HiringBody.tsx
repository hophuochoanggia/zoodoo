import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderContenfulOptions } from "../NewsAndActivities/NewsBody";

const HiringBody = ({ content }) => {
  return (
    <div className=" contentful-container">
      {documentToReactComponents(content, renderContenfulOptions)}
    </div>
  );
};

export default HiringBody;

import stlyes from "@/app/components/ClosedResearchCalls/ClosedResearchCalls.module.scss";
import Carousel from "./Carousel/Carousel";
import React from "react";

export default function ClosedResearchCalls() {
  return (
    <div className={`container ${stlyes.mainContainer}`}>
      <h2>Closed Research Calls</h2>
      <Carousel />
    </div>
  );
}

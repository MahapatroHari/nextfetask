// Carousel.jsx
"use client";

import React from "react";
import styles from "./Carousel.module.scss";
import Card from "../Card/Card";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Carousel() {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
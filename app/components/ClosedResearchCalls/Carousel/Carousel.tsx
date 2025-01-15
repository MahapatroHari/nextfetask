"use client";

import React from "react";
import styles from "./Carousel.module.scss";
import Card from "../Card/Card";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Carousel() {
  return (
    <div className={`container ${styles.carouselContainer}`}>
      <div className={`${styles.cardContainerDesktop} researchSlider`}>
        <Glider
          draggable
          hasDots
          slidesToShow={3}
          slidesToScroll={1}
          skipTrack={true}
          itemWidth={334}
          exactWidth
        >
          <div className={styles.sliderContainer}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Glider>
      </div>

      <div className={styles.mobileCardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

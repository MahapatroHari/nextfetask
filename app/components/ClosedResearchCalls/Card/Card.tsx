import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={`container ${styles.cardContainer}`}>
      {/* Header Section */}
      <div className={styles.stockHeader}>
        <div className={styles.stockInfo}>
          <h3 className={styles.stockName}>TATACOMM : FS 26 DEC 24</h3>
          <div className={styles.equityBadge}>
            <p>EQ</p>
          </div>
        </div>
        <p className={styles.stockFullName}>MAZDOCK Dock Ship Builders</p>
      </div>

      {/* Price Section */}
      <div className={styles.priceSection}>
        <div className={styles.priceBlock}>
          <p className={styles.label}>Open Price</p>
          <span className={styles.value}>4889.55</span>
        </div>
        <div className={styles.priceBlock}>
          <span className={styles.label}>Target Price</span>
          <span className={styles.value}>5890</span>
        </div>
      </div>

      {/* Transaction Details */}
      <div className={styles.transactionDetails}>
        <div className={styles.detailBlock}>
          <span className={styles.label}>Transaction Type</span>
          <span className={`${styles.value} ${styles.buyValue}`}>Buy</span>
        </div>
        <div className={styles.detailBlock}>
          <span className={styles.label}>Reco. Date</span>
          <span className={styles.value}>03 Jan 2025</span>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className={styles.performanceMetrics}>
        <div className={styles.metricBlock}>
          <span className={styles.label}>P&L</span>
          <span className={`${styles.value} ${styles.plValue}`}>12.0 %</span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.label}>Target Date</span>
          <span className={styles.value}>05 Jan 2025</span>
        </div>
      </div>
    </div>
  );
}

export default Card;

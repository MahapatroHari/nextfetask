import styles from "./page.module.scss";
import ClosedResearchCalls from "./components/ClosedResearchCalls/ClosedResearchCalls";

export default function Home() {
  return (
    <div className={`container ${styles.pageContainer}`}>
      <ClosedResearchCalls />
    </div>
  );
}
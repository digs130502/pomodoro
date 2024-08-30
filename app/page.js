import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        <p>Hello World!</p>
      </h1>
    </div>
  );
}

import Link from "next/link";

import styles from "./index.module.css";
import type { ReactNode } from "react";
import CompanyInfo from "./_components/CompanyInfo";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Vehicles from "./_components/Vehicles";
import AboutCompany from "./_components/AboutCompany";
import Certification from "./_components/Certification";

export default async function Home() {
  return (
    <main className={styles.main}>
      <CompanyInfo />
      <Header />
      <Hero />
      <div className={styles.wrapper}>
        <Vehicles />
        <AboutCompany />
        <Certification />
      </div>
    </main>
  );
}

import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import styles from "./index.module.css";
import type { ReactNode } from "react";
import CompanyInfo from "./_components/CompanyInfo";
import Header from "./_components/Header";

export default async function Home() {
  return (
    <HydrateClient>
      <main className={styles.main}>
        <CompanyInfo />
        <Header />
      </main>
    </HydrateClient>
  );
}

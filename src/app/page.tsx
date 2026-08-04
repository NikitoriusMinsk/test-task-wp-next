import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import styles from "./index.module.css";
import type { ReactNode } from "react";

export default async function Home() {
  const posts = await api.post.get({ count: 10 });
  console.log(posts);

  return (
    <HydrateClient>
      <main className={styles.main}></main>
    </HydrateClient>
  );
}

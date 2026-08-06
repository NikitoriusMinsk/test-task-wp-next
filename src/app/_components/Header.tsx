import Image from "next/image";
import styles from "~/styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.navigation}>
      <div className={styles.catalogue}>
        <Image alt="Menu" src={"/menu.svg"} height={12} width={30} />
        <span className={styles.navItem}>каталог техники</span>
      </div>
      <span className={styles.navItem}>каталог техники</span>
      <span className={styles.navItem}>цены</span>
      <span className={styles.navItem}>клиентам</span>
      <span className={styles.navItem}>о нас</span>
      <span className={styles.navItem}>статьи</span>
      <span className={styles.navItem}>контакты</span>
      <button className={styles.button}>заказать звонок</button>
    </header>
  );
}

import Image from "next/image";
import styles from "~/styles/components/Certification.module.css";

export default function Certification() {
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.text}>
        <h2>Сертификаты и лицензии</h2>
        <p>
          Мы понимаем, что качество и безопасность — это главные приоритеты
          в сфере аренды специальной техники. Поэтому мы постоянно стремимся
          к соблюдению всех стандартов и требованиям, которые гарантируют
          надёжность и эффективность нашей работы.
        </p>
      </div>
      <div className={styles.slider}>
        <div className={styles.controls}>
          <button>
            <Image src={"/arrow.svg"} height={25} width={25} alt="" />
          </button>
          <button className={styles.active}>
            <Image src={"/arrow.svg"} height={25} width={25} alt="" />
          </button>
        </div>
        <div className={styles.sliderContent}>
          <div className={styles.slide}>
            <Image
              src={"/Certification/certificate1.png"}
              height={418}
              width={298}
              alt=""
            />
            <Image
              src={"/Certification/certificate1.png"}
              height={418}
              width={298}
              alt=""
            />
          </div>
        </div>
        <div className={styles.dots}>
          <div />
          <div />
          <div className={styles.active} />
        </div>
      </div>
    </div>
  );
}

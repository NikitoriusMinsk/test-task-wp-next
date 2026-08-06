import Image from "next/image";
import styles from "~/styles/components/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImage}>
        <Image src={"/hero/hero1.png"} fill alt="Hero" objectFit={"cover"} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h3>Современная спецтехника</h3>
          <h1>
            Аренда специальной техники для эффективных решений вашего бизнеса
          </h1>
          <p>
            Мы предлагаем широкий ассортимент спецтехники в аренду, чтобы помочь
            вам успешно решать задачии в строительстве, ремонте, земельных
            работах и других сферах.
          </p>
          <div className={styles.buttons}>
            <button>заказать звонок</button>
            <div>
              <span>узнать стоимость</span>
              <button>
                <Image src={"/arrow.svg"} height={16} width={16} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.block}>
            <h3>Гибкие условия аренды</h3>
            <p>
              Краткосрочная и долгосрочная аренда, мы подстраиваемся под ваши
              требования.
            </p>
          </div>
          <div className={styles.block}>
            <Image
              src={"/Hero/sliderImage.svg"}
              alt=""
              height={35}
              width={31}
            />
            <h3>Профессиональное обслуживание</h3>
            <p>
              Наша команда экспертов всегда готова помочь вам выбрать подходящую
              технику и ответить на все вопросы.
            </p>
          </div>
          <div className={styles.dots}>
            <div />
            <div />
            <div className={styles.active} />
          </div>
        </div>
      </div>
    </div>
  );
}

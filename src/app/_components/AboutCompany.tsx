import Image from "next/image";
import styles from "~/styles/components/AboutCompany.module.css";

export default function AboutCompany() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={"/AboutCompany/image.png"}
          height={480}
          width={625}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <h3>ООО «Беркана»</h3>
          <h2>О компании</h2>
          <p>
            Наша миссия заключается в том, чтобы предоставить клиентам доступ
            к надёжной и высококачественной технике, которая поможет им успешно
            реализовать свои проекты. Мы стремимся устанавливать долгосрочные
            отношения с нашими клиентами, основанные на доверии
            и взаимопонимании.
          </p>
          <p>
            Предлагаем вам воспользоваться нашими услугами и оставить свой
            отзыв, так вы поможете сделать наш сервис лучше. Мы стараемся
            предложить индивидуальный подход каждому клиенту и надеемся
            на долгосрочное сотрудничество.
          </p>
          <div className={styles.more}>
            <span>читать подробнее</span>
            <button>
              <Image src={"/arrowYellow.svg"} height={16} width={16} alt="" />
            </button>
          </div>
        </div>
        <div className={styles.awards}>
          <Award
            image="/AboutCompany/award.svg"
            title="8 лет"
            text="опыта работы"
          />
          <Award
            image="/AboutCompany/like.svg"
            title=">100"
            text="довольных клиентов"
          />
          <Award
            image="/AboutCompany/crane.svg"
            title=">20"
            text="спецтехники"
          />
        </div>
      </div>
    </div>
  );
}

interface AwardProps {
  image: string;
  title: string;
  text: string;
}

function Award(props: AwardProps) {
  const { image, text, title } = props;
  return (
    <div className={styles.award}>
      <Image src={image} height={32} width={32} alt={""} />
      <span>
        <h2>{title}</h2>
        <h3>{text}</h3>
      </span>
    </div>
  );
}

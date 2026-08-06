import Image from "next/image";
import styles from "~/styles/components/CompanyInfo.module.css";

export default function CompanyInfo() {
  return (
    <header className={styles.header}>
      <Image
        alt="company logo"
        src={"/CompanyInfo/logo.png"}
        width={80}
        height={43}
      />
      <Contact
        image="/location.svg"
        heading="Санкт-Петербург"
        text="пр-кт Индустриальный, 44/2 лит а, оф. 527"
      />
      <Contact
        image="/CompanyInfo/time.svg"
        heading="время работы"
        text="пн-вс: с 8:00 до 22:00"
      />
      <Contact
        image="/CompanyInfo/phone.svg"
        heading="контакты"
        text="+7 812 561-62-17"
      />
      <Contact
        image="/CompanyInfo/mail.svg"
        heading="электронная почта"
        text="ai@berkana.spb.ru"
      />
      <div className={styles.messengers}>
        <Image
          alt="Contact us on Telegram"
          src={"/CompanyInfo/telegram.svg"}
          height={25}
          width={25}
        />
        <Image
          alt="Contact us on WhatsApp"
          src={"/CompanyInfo/whatsapp.svg"}
          height={25}
          width={25}
        />
      </div>
    </header>
  );
}

interface ContactProps {
  image: string;
  text: string;
  heading: string;
}

function Contact(props: ContactProps) {
  const { image, text, heading } = props;
  return (
    <div className={styles.container}>
      <Image alt="" src={image} height={20} width={20} />
      <div className={styles.textContainer}>
        <span className={styles.heading}>{heading}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}

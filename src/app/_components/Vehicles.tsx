import Image from "next/image";
import styles from "~/styles/components/Vehicles.module.css";

export default function Vehicles() {
  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <SliderElement
            image="/Vehicles/vehicle1.png"
            title="Экскаваторы-погрузчики"
          />
          <SliderElement image="/Vehicles/vehicle2.png" title="Самосвалы" />
        </div>
      </div>
      <div className={styles.controls}>
        <button>
          <Image src={"/arrowDark.svg"} height={23} width={23} alt="" />
        </button>
        <button className={styles.active}>
          <Image src={"/arrowDark.svg"} height={23} width={23} alt="" />
        </button>
      </div>
      <div className={styles.dots}>
        <div />
        <div />
        <div className={styles.active} />
      </div>
    </div>
  );
}

interface SliderElementProps {
  image: string;
  title: string;
}

function SliderElement(props: SliderElementProps) {
  const { image, title } = props;

  return (
    <div className={styles.sliderElement}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill objectFit="cover" />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <button>
          <Image src={"/arrow.svg"} height={16} width={16} alt="" />
        </button>
      </div>
    </div>
  );
}

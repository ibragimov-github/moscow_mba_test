import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles['practical-modules']} ${styles.card}`}>
        <div className={styles.corner}></div>
        <h3 className={styles.title}>Практические модули</h3>
        <span className={styles.content}>
          Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
        </span>
      </div>
      <div className={`${styles['final-examination']} ${styles.card}`}>
        <h3 className={styles.title}>Итоговая аттестация</h3>
        <ul className={styles.list}>
          <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
          <li>Защита итоговой аттестационной работы
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
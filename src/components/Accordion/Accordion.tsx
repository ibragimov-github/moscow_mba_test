import styles from './Accordion.module.scss';
import { useState } from 'react'
import { v4 } from 'uuid';

type TypeAccordion = {
  moduleNum: string,
  content: object[]
}

type TypeEL = {
  string?: string
}

function Accordion({moduleNum, content}: TypeAccordion) {
  const [isActive, setIsActive] = useState(false);
  const style = {
    backgroundColor: '#FF3535',
    color: '#fff'
  }
  const itemStyle = {
    height: 'auto'
  }
  return (
    <div className={styles['accordion-item']}>
      <div
        style={isActive ? style : undefined}
        className={styles['accordion-title']}
        onClick={() => setIsActive(!isActive)}>
        <div className={styles.symbol}>{isActive ? '-' : '+'}</div>
        <span className={styles.title}>{moduleNum}</span>
      </div>
      <div
      style={isActive ? itemStyle:undefined}
        className={styles['accordion-content']}
      >
        <ul>
          {content.map((el: TypeEL) => {
            return (
              <li
                key={v4()}
              >{el.string}</li>
            );
          })}
        </ul>
      </div>
    </div >
  );
}

export default Accordion;
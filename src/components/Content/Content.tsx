/* eslint-disable react-hooks/exhaustive-deps */
import styles from './Content.module.scss'
import axios from 'axios'
import { ProgressBar } from 'react-loader-spinner'
import { useState, useEffect } from 'react'
import Accordion from '../Accordion/Accordion'
import { v4 } from 'uuid';



function Content() {
  const apiKey = 'https://api-moscow-mba.herokuapp.com/products'
  const [showPrograms, setShowPrograms] = useState<object[]>([])
  function getRandomArbitrary(min = 0, max = 95) {
    const random = Math.floor(Math.random() * (max - min) + min);
    return random
  }
  useEffect(() => {
    const random = getRandomArbitrary()
    const acc: any = []
    axios.get(apiKey).then(({ data }) => {
      for (let i of data.slice(63, 68)) {
        acc.push(i)
        setShowPrograms(acc)
      }

    })
  }, [])
  return (
    <div className={styles.content}>
      {!showPrograms.length ?
        <div className={styles.loader}>
          <ProgressBar
            barColor='red'
          />
        </div> :
        showPrograms.map((el: any) => {
          return (
            <div
              key={v4()}
            >
              <div
                className={styles['card-desktop']}
              >
                <h2 className={styles['card-title']}>{el.title}</h2>
                <div className={styles['module-container']}>
                  <div className={styles.first}>
                    <h3 className={styles['module-title']}>1 Модуль</h3>
                    <ul className={styles['module-list']}>
                      {el.specializedSubjects.slice(0, 5).map((listEl: any) => (
                        <li
                          key={v4()}
                        >{listEl.string}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.second}>
                    <h3 className={styles['module-title']}>2 Модуль</h3>
                    <ul className={styles['module-list']}>
                      {el.specializedSubjects.slice(5, 10).map((listEl: any) => (
                        <li
                          key={v4()}
                        >{listEl.string}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles['card-mobile']}>
                <h2 className={styles['card-title']}>{el.title}</h2>
                <Accordion
                  moduleNum='1 модуль'
                  content={el.specializedSubjects.slice(0, 5)}
                />
                <Accordion
                  moduleNum='2 модуль'
                  content={el.specializedSubjects.slice(5, 10)}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Content;
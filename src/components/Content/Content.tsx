import styles from './Content.module.scss'
import axios from 'axios'
import { InfinitySpin } from 'react-loader-spinner'
import { useState, useEffect } from 'react'


function Content() {
  const apiKey = 'https://api-moscow-mba.herokuapp.com/products'
  const [showPrograms, setShowPrograms] = useState<object[]>([])
  function getRandomArbitrary(min = 0, max = 95) {
    return Math.random() * (max - min) + min;
  }
  const randomNumber = getRandomArbitrary();

  useEffect(() => {
    axios.get(apiKey).then(programs => {
      const programList = programs.data.slice(randomNumber, randomNumber + 5)
      for (let program of programList) {
        const coupleModules = programs.data.filter((el: any) => {
          if (el.title === program.title) {
            return el;
          }
        })
        console.log(coupleModules)

      }

    }).catch(error => console.error(error))
  }, [randomNumber])

  return (
    <div className={styles.content}>
    </div>
  );
}

export default Content;
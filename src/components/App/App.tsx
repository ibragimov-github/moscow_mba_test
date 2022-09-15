import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.head}>Специализированные дисциплины</h1>
      </header>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
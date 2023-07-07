import styles from 'styles/Home.module.css';
import logo from 'assets/logo.svg';

function Home() {
  return (
    <div className={styles.Home}>
      <header className={styles.HomeHeader}>
        <img src={logo} className={styles.HomeLogo} alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className={styles.HomeLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;

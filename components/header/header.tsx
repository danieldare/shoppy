import Ad from "./ad";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
    </header>
  );
};

export default Header;

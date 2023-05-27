import styles from "./header.module.scss";
import { SiSpringsecurity } from "react-icons/si";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";

export default function TopHeader() {
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg"
              alt="nigeria flag"
            />
            <span>Nigeria / NGN</span>
          </li>
          <li>
            <SiSpringsecurity />
            <span>Nigeria / NGN</span>
          </li>
          <li>
            <span>Customer</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <span>WhishList</span>
          </li>
          <li>
            <div className={styles.flex}>
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

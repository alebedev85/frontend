import { NavLink } from 'react-router-dom';
import { navbarMenuList } from './navbarMenuList';
import icon from '../../assets/Yandex_znak 1.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.navbar__icon} src={icon} alt="Yandex icon" />
      <ul className={styles.navbar__list}>
        {navbarMenuList.map((item) => (
          <li className={styles.navbar__item}>
            <NavLink to={item.link} className={styles.navbar__link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

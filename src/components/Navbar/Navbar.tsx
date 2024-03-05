import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { navbarMenuList } from './navbarMenuList';
import icon from '../../assets/Yandex_znak 1.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <div className={styles.navbar}>
      <img className={styles.navbar__icon} src={icon} alt="Yandex icon" />
      <ul className={styles.navbar__list}>
        {navbarMenuList.map((item) => (
          <li
            key={item.id}
            className={clsx(
              styles.navbar__item,
              pathname === item.link && styles.navbar__item_active
            )}
          >
            <NavLink to={item.link} className={styles.navbar__link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { NavLink } from 'react-router-dom';
import { navbarMenuList } from './navbarMenuList';
import icon from '../../assets/Yandex_znak 1.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt="Yandex icon" />
      <ul className={styles.list}>
        {navbarMenuList.map((item) => (
          <li>
            <NavLink to={item.link} className={styles.item}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface NavbarMenuListItem {
  id: number;
  label: string;
  link: string;
}

export const navbarMenuList: NavbarMenuListItem[] = [
  {
    id: 1,
    label: 'Главная',
    link: '/',
  },
  {
    id: 2,
    label: 'Отправка',
    link: '/send',
  },
  {
    id: 3,
    label: 'Бюджет',
    link: '/budget',
  },
];

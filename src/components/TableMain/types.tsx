export type TableData = {
  id: number;
  name: string;
  telegramm: string;
  promo: string;
  city: string;
  course: string;
  register: string;
  status: string;
  gaidOne: string;
  gaidTwo: string;
  onboarding: string;
  profile: string;
}[];

export type TableMainPropsType = {
  onProfile: (id: string) => void;
};

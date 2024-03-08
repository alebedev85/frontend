export type UserType = {
  email: string;
  id: number;
  username: string;
};

export type AmbassadorsType = {
  id: number;
  fio: string;
  telegram: string;
  promo: string;
  status: string;
  city: string;
  course: string;
  registrationDate: string;
  guideOneInfo: string;
  guideTwoInfo: string;
  onboardingInfo: string;
};

export type AmbassadorInfoType = {
  personalInfo: {
    fio: string;
    city: string;
    country: string;
    course: string;
    promo: string;
    status: string;
    registrationDate: string;
  };
  contacts: {
    telegram: string;
    phoneNumber: string;
    email: string;
  };
  guideInfo: {
    guideOneStatus: boolean;
    guideOnePlace: string;
    guideOneUrl: string;
    guideTwoStatus: boolean;
    guideTwoFirstPlace: string;
    guideTwoFirstUrl: string;
    guideTwoSecondPlace: string;
    guideTwoSecondUrl: string;
    onboardingStatus: boolean;
  };
  education: {
    education: string;
    workPlace: string;
  };
  preferences: {
    comment: string;
    preferences: string[];
  };
  merchInfo: {
    index: number;
    city: string;
    address: string;
    clothesSize: string;
    shoesSize: string;
    sent: string[];
  };
  activity: {
    onboardingPassDate: string;
    content: [
      {
        date: string;
        title: string;
        url: string;
      },
    ];
  };
};

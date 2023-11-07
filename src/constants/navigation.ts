type NavItem = {
   path: string;
   label: string;
};

export const navigationPaths = {
   home: {
      label: 'Home',
      path: '/',
   },
   aboutUs: {
      label: 'O nas',
      path: '/o-nas',
   },
   cooperation: {
      label: 'Współpraca',
      path: '/wspolpraca',
   },
   events: {
      label: 'Wydarzenia',
      path: '/wydarzenia',
   },
   projects: {
      label: 'Nasze projekty',
      path: '/projekty',
   },
   filmSchool: {
      label: 'Szkoła filmowa',
      path: '/szkola-filmowa',
   },
   developmentGroups: {
      label: 'Grupy rozwojowe',
      path: '/grupy-rozwojowe',
   },
   aboutPlatform: {
      label: 'O platformie',
      path: '/o-platformie',
   },
   partners: {
      label: 'Partnerzy',
      path: '/partnerzy',
   },
   gallery: {
      label: 'Galeria',
      path: '/galeria',
   },
   contact: {
      label: 'Kontakt',
      path: '/kontakt',
   },
} as const satisfies Record<PropertyKey, NavItem>;

export const navigationArray = Object.values(navigationPaths);

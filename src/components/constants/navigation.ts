type NavItem = {
	path: string;
	label: string;
};

export const navigationPaths = {
	home: {
		label: 'Przejdź do strony głównej',
		path: '/',
	},
	cooperation: {
		label: 'Zobacz z kim współpracujemy',
		path: '/współpraca',
	},
	aboutUs: {
		label: 'O nas',
		path: '/o-nas',
	},
    aboutPlatform: {
        label: 'O platformie',
        path: '/o-platformie'
    },
	partners: {
		label: 'Nasi partnerzy',
		path: '/partnerzy',
	},
	gallery: {
		label: 'Nasza galeria zdjęć',
		path: '/galeria',
	},
	contact: {
		label: 'Skontaktuj się z nami',
		path: '/kontakt',
	},
    events: {
        label: 'Wydarzenia',
        path: '/wydarzenia'
    },
    projects: {
        label: 'Nasze projekty',
        path: '/projekty'
    },
    filmSchool: {
        label: 'Szkoła filmowa',
        path: '/szkola-filmowa'
    },
    developmentGroups: {
        label: 'Grupy rozwojowe',
        path: '/grupy-rozwojowe'
    }

} as const satisfies Record<PropertyKey, NavItem>;

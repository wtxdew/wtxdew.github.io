// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Tong',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd1e0703c4634cb12d4c7a36572ea9829', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '25.032969',
	defaultLongitude: '121.565414',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
	// https://lucide.dev/icons/
	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Discord',
			icon: 'bot-message-square',
			link: 'https://discord.com/channels/@me',
		},
		{
			id: '3',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '4',
			name: 'Messages',
			icon: 'facebook',
			link: 'https://www.facebook.com/messages/',
		},
		{
			id: '5',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
		{
			id: '6',
			name: 'Hpoi',
			icon: 'cat',
			link: 'https://www.hpoi.net',
		},  
	],

	secondButtonsContainer: [
		{
			id: '1',
			icon: 'headphones',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'clipboard-list',
			id: '1',
			links: [
				{
					name: 'KEK User',
					link: 'https://krs.kek.jp/uskek/ui/UI_00000E.do',
				},
				{
			        	name: 'KEK Indico',
                   			link: 'https://kds.kek.jp/category/74/',
				},
				{
					name: 'Indico Search',
					link: 'https://justice.hep.sci.osaka-u.ac.jp/kotoweb/kotoweb.php',
				},
				{
					name: 'KEKCC Support',
					link: 'https://kekcc.kek.jp/service/kekcc/support/en/',
				},
				{
					name: 'RUN Homepage',
					link: 'https://justice.hep.sci.osaka-u.ac.jp/run40/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'ChatGPT',
					link: 'https://chat.openai.com',
				},
				{
					name: 'Gemini',
					link: 'https://gemini.google.com/app',
				},
				{
			                name: 'Claude',
			                link: 'https://claude.ai',    
			        },
				{
					name: 'DeepL',
					link: 'https://www.deepl.com/translator',
				},
				{
					name: 'Max',
					link: 'https://play.max.com/',
				},				
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};

import type { ContactLink } from './model/ContactLink';

// create a constant string and export it
export const mainPageHeader = "I'm Manu a Senior Front End Developer";
export const mainPageSubHeader =
	'With 4x years of experience in industry in mobile development and web development.';

export const links: ContactLink[] = [
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/manu-kenchappa-junjanna-910455143/',
		icon: 'src/lib/assets/contact_icons/linkedin.svg'
	},
	{
		name: 'GitHub',
		url: 'https://github.com/manukj',
		icon: 'src/lib/assets/contact_icons/github.svg'
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/manu_k_j',
		icon: 'src/lib/assets/contact_icons/twitter.svg'
	},
	{
		name: 'Medium',
		url: 'https://medium.com/@manu1998kj',
		icon: 'src/lib/assets/contact_icons/medium.svg'
	}
];

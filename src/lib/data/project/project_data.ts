import type { ProjectItemModel } from '../model/ProjectItemModel';

var boringHtml: ProjectItemModel = {
	name: 'Boring HTML',
	description:
		'AI to generate HTML code from hand-drawn UI wireframes, accessible through a Website, Flutter App, integrated with Twilio for WhatsApp, and a Telegram bot.',
	url: 'https://www.linkedin.com/posts/manu-kenchappa-junjanna-910455143_machinelearning-deeplearning-python-activity-6667729526786793472-YoJ_?utm_source=share&utm_medium=member_desktop',
	techStack: [
		{
			name: 'Python',
			icon: 'src/lib/assets/tech_stack_icon/python.svg'
		},
		{
			name: 'Twilio',
			icon: 'src/lib/assets/tech_stack_icon/twilio.svg'
		},
		{
			name: 'AI',
			icon: 'src/lib/assets/tech_stack_icon/ai.svg'
		},
		{
			name: 'Flask',
			icon: 'src/lib/assets/tech_stack_icon/flask.svg'
		}
	]
};


export const projectData: ProjectItemModel[] = [boringHtml, boringHtml];

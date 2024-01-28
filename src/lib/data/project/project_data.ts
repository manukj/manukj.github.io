import type { ProjectItemModel } from '../model/ProjectItemModel';

var boringHtml: ProjectItemModel = {
    name: 'Boring HTML',
    description:
        'AI to generate HTML code from hand-drawn UI wireframes, accessible through a Website, Flutter App, integrated with Twilio for WhatsApp, and a Telegram bot.',
    techStack: [
        {
            name: 'Python',
            icon: 'src/lib/assets/tech_stack_icon/python.svg'
        }
    ]
};

export const projectData: ProjectItemModel[] = [boringHtml,boringHtml];

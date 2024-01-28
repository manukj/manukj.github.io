import type { TechStackModel } from './TechStackModel';

export class ProjectItemModel {
	name: string;

	description: string;

	techStack: TechStackModel[];

	url?: string;

	constructor(name: string, description: string, techStack: TechStackModel[], url?: string) {
		this.name = name;
		this.description = description;
		this.techStack = techStack;
		this.url = url;
	}
}

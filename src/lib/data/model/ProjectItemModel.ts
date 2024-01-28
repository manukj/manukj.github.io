import type { TechStackModel } from './TechStackModel';

export class ProjectItemModel {
	name: string;

	description: string;

	techStack: TechStackModel[];

	constructor(id: number, name: string, description: string, techStack: TechStackModel[]) {
		this.name = name;
		this.description = description;
		this.techStack = techStack;
	}
}

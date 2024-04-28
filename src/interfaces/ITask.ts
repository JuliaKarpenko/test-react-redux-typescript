export interface Task {
	name: string;
	id: number;
	done: boolean;
	deleted: boolean;
}

export interface State {
	tasks: Task[];
}

export enum Tab {
	ACTIVE,
	DELETED,
}

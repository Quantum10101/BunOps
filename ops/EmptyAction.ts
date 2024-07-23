import { MenuAction } from "../lib/MenuAction.ts";

export class EmptyAction extends MenuAction {
	title: string = "";
	command: string = "";
	menuText: string = "";
	
	action(): void {}
}

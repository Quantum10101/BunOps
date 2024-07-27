import { MenuAction } from "./MenuAction.ts";

export class EmptyAction extends MenuAction {
	title: string = "";
	command: string = "";
	menuText: string = "";
	
	action(): void {}
}

import { MenuAction } from "../lib/MenuAction.ts";

export class ExitAction extends MenuAction {
	title: string = "Exit";
	command: string = "x";
	menuText: string = "Exit BunOps";
	
	action(): void {
		process.exit();
	}
}

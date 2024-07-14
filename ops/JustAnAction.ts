import { MenuAction } from "../lib/MenuAction.ts";

export class JustAnAction extends MenuAction {
	title: string = "Just an Action";
	command: string = "j";
	menuText: string = "Run Just an Action";
	
	action(data?: {[key: string]: any}): void {
		console.log("i do action now");
		console.log(data);
		
		//this.menuSystem.nextAction(MenuActionEnum.MainMenu);
		this.menuSystem.lastAction();
	}
}

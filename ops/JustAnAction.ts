import { MenuAction } from "../lib/MenuAction.ts";

export class JustAnAction extends MenuAction {
	title: string = "Just an Action";
	command: string = "j";
	menuText: string = "Run Just an Action";
	
	action(data?: {[key: string]: any}): void {
		this.menuSystem.data["stuff"] += this.menuSystem.data["stuff"].length - 5;
		
		console.log(this.menuSystem.data["stuff"]);
		console.log("i do action now");
		console.log(data);
		
		//this.menuSystem.nextAction(MenuActionEnum.MainMenu);
		this.menuSystem.lastAction();
	}
}

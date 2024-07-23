import readlineSync from "readline-sync";
import { MenuAction } from "../lib/MenuAction.ts";
import { HelperOne } from "./HelperOne.ts";
import { cmd } from "../lib/cmd.ts";

export class JustAnAction extends MenuAction {
	title: string = "Just an Action";
	command: string = "j";
	menuText: string = "Run Just an Action";
	
	action(data?: {[key: string]: any}): void {
		this.menuSystem.data["stuff"] += this.menuSystem.data["stuff"].length - 5;
		
		process.stdout.write(`${cmd.CLS}`);
		
		console.log(this.menuSystem.data["stuff"]);
		console.log("i do action now");
		
		const helperOne = new HelperOne();
		console.log(helperOne.str);
		const helperTwo = new HelperTwo();
		console.log(helperTwo.str);
		
		console.log(data);
		
		process.stdout.write("Press ENTER to continue.");
		process.stdout.write(`${cmd.cursor.HIDE}`);
		readlineSync.question();
		process.stdout.write(`${cmd.cursor.SHOW}`);
		
		//this.menuSystem.nextAction(MenuActionEnum.MainMenu);
		this.menuSystem.lastAction();
	}
}

class HelperTwo {
	str: string = "helper two class";
}

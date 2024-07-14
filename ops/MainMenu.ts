import { MenuActionEnum } from "./MenuActionEnum.ts";
import { MenuAction } from "../lib/MenuAction.ts";

export class MainMenu extends MenuAction {
	title: string = "Main Menu";
	command: string = "mm";
	menuText: string = "Return to Main Menu";
	
	action(): void {
		this.menuSystem.menuHistory.push(this.menuActionEnum);
		
		process.stdout.write(`${this.title}\n\n`);
		
		this.menu([
			{menuAction: MenuActionEnum.MenuItem, command: "mi"},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
			{menuAction: MenuActionEnum.JustAnAction, menuText: "do the stuff", data: {"hello": "world"}},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
		]);
	}
}

import { type HistoryItem } from "../lib/MenuSystem.ts";
import { MenuActionEnum } from "./MenuActionEnum.ts";
import { MenuAction } from "../lib/MenuAction.ts";
import { cmd } from "../lib/cmd.ts";

export class MainMenu extends MenuAction {
	title: string = "Main Menu";
	command: string = "mm";
	menuText: string = "Return to Main Menu";
	
	action(data?: Record<string, any>): void {
		this.menuSystem.menuHistory.push({menuAction: this.menuActionEnum, data});
		
		process.stdout.write(`${cmd.CLS}`);
		process.stdout.write(`${this.title}\n\n`);
		
		console.log(data);
		console.log();
		
		this.menu([
			{menuAction: MenuActionEnum.MenuItem, command: "mi"},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
			{menuAction: MenuActionEnum.JustAnAction, menuText: "do the stuff", data: {"hello": "world"}},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
			{menuAction: MenuActionEnum.MenuItem, command: "o"},
			{menuAction: MenuActionEnum.Empty},
			{menuAction: MenuActionEnum.Exit},
		]);
	}
}

import { MenuActionEnum } from "./MenuActionEnum.ts";
import { MenuAction } from "../lib/MenuAction.ts";

export class MenuItem extends MenuAction {
	title: string = "Menu Item";
	command: string = "m";
	menuText: string = "View Menu Item";
	
	action(): void {
		this.menuSystem.menuHistory.push(this.menuActionEnum);
		
		process.stdout.write(`${this.title}\n\n`);
		
		this.menu([
			{menuAction: MenuActionEnum.MainMenu, command: "mm"},
			{menuAction: MenuActionEnum.JustAnAction, menuText: "do the stuff", data: {"hello": "world"}},
			{menuAction: MenuActionEnum.LastMenu},
		]);
	}
}

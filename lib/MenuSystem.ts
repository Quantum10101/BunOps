import { MenuAction } from "./MenuAction.ts";
import { MenuActionEnum } from "../ops/MenuActionEnum.ts";

export class MenuSystem {
	menuActions: Record<MenuActionEnum, MenuAction>;
	firstMenu: undefined|MenuActionEnum;
	menuHistory: Array<MenuActionEnum> = new Array<MenuActionEnum>();
	
	constructor(menuActions: Record<MenuActionEnum, MenuAction>) {
		for (let [_, value] of Object.entries(menuActions)) {
			value.menuSystem = this;
		}
		
		this.menuActions = menuActions;
	}
	
	nextAction(menuAction: MenuActionEnum, data?: {[key: string]: any}): void {
		if (this.firstMenu === undefined) this.firstMenu = menuAction;
		this.menuActions[menuAction].action(data);
	}
	
	lastAction(data?: {[key: string]: any}): void {
		const lastAction = this.menuHistory.pop();
		if (lastAction === undefined) {
			if (this.firstMenu === undefined) throw Error("MenuSystem was set up, but never a call to nextAction");
			this.nextAction(this.firstMenu, data);
		}
		else {
			this.nextAction(lastAction, data);
		}
	}
}

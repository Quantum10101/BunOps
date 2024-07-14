import { MenuSystem } from "./lib/MenuSystem.ts";
import { MenuActionEnum } from "./ops/MenuActionEnum.ts";
import { JustAnAction } from "./ops/JustAnAction.ts";
import { MainMenu } from "./ops/MainMenu.ts";
import { MenuItem } from "./ops/MenuItem.ts";

const menuSystem = new MenuSystem(
	{
		[MenuActionEnum.JustAnAction]: new JustAnAction(MenuActionEnum.JustAnAction),
		[MenuActionEnum.MainMenu]: new MainMenu(MenuActionEnum.MainMenu),
		[MenuActionEnum.MenuItem]: new MenuItem(MenuActionEnum.MenuItem),
	}
);

menuSystem.nextAction(MenuActionEnum.MainMenu);

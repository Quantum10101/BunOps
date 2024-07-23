import { MenuSystem } from "./lib/MenuSystem.ts";
import { MenuActionEnum } from "./ops/MenuActionEnum.ts";
import { EmptyAction } from "./ops/EmptyAction.ts";
import { ExitAction } from "./ops/ExitAction.ts";
import { LastMenuAction } from "./ops/LastMenuAction.ts";
import { JustAnAction } from "./ops/JustAnAction.ts";
import { MainMenu } from "./ops/MainMenu.ts";
import { MenuItem } from "./ops/MenuItem.ts";

const menuSystem = new MenuSystem(
	{
		[MenuActionEnum.Empty]: new EmptyAction(MenuActionEnum.Empty),
		[MenuActionEnum.Exit]: new ExitAction(MenuActionEnum.Exit),
		[MenuActionEnum.LastMenu]: new LastMenuAction(MenuActionEnum.LastMenu),
		[MenuActionEnum.JustAnAction]: new JustAnAction(MenuActionEnum.JustAnAction),
		[MenuActionEnum.MainMenu]: new MainMenu(MenuActionEnum.MainMenu),
		[MenuActionEnum.MenuItem]: new MenuItem(MenuActionEnum.MenuItem),
	},
	{"stuff": "things"}
);

menuSystem.nextAction(MenuActionEnum.MainMenu);

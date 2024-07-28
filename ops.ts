import { MenuSystem } from "./lib/MenuSystem.ts";
import { MenuActionEnum } from "./ops/MenuActionEnum.ts";
import { EmptySpace } from "./lib/EmptySpace.ts";
import { ExitAction } from "./lib/ExitAction.ts";
import { LastMenuAction } from "./lib/LastMenuAction.ts";
import { JustAnAction } from "./ops/JustAnAction.ts";
import { MainMenu } from "./ops/MainMenu.ts";
import { MenuItem } from "./ops/MenuItem.ts";

const menuSystem = new MenuSystem(
	{
		[MenuActionEnum.EmptySpace]: new EmptySpace(MenuActionEnum.EmptySpace),
		[MenuActionEnum.Exit]: new ExitAction(MenuActionEnum.Exit),
		[MenuActionEnum.LastMenu]: new LastMenuAction(MenuActionEnum.LastMenu),
		[MenuActionEnum.JustAnAction]: new JustAnAction(MenuActionEnum.JustAnAction),
		[MenuActionEnum.MainMenu]: new MainMenu(MenuActionEnum.MainMenu),
		[MenuActionEnum.MenuItem]: new MenuItem(MenuActionEnum.MenuItem),
	},
	{"stuff": "things"}
);

menuSystem.nextAction(MenuActionEnum.MainMenu, {"startingData": "123"});

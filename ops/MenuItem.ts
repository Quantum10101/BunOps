import { MenuActionEnum } from "./MenuActionEnum.ts";
import { MenuAction } from "../lib/MenuAction.ts";
import { cmd } from "../lib/cmd.ts";

export class MenuItem extends MenuAction {
	title: string = "Menu Item";
	command: string = "m";
	menuText: string = "View Menu Item";
	
	action(): void {
		this.menuSystem.menuHistory.push({menuAction: this.menuActionEnum});
		
		process.stdout.write(`${cmd.CLS}`);
		process.stdout.write(`${this.title}\n\n`);
		
		process.stdout.write(`Color tests:\n`);
		
		process.stdout.write(`${cmd.color.RED}RED${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.RED_BG}RED_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.RED_DARK}RED_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.RED_DARK_BG}RED_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.GREEN}GREEN${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.GREEN_BG}GREEN_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.GREEN_DARK}GREEN_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.GREEN_DARK_BG}GREEN_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.BLUE}BLUE${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLUE_BG}BLUE_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLUE_DARK}BLUE_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLUE_DARK_BG}BLUE_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.YELLOW}YELLOW${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.YELLOW_BG}YELLOW_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.YELLOW_DARK}YELLOW_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.YELLOW_DARK_BG}YELLOW_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.MAGENTA}MAGENTA${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.MAGENTA_BG}MAGENTA_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.MAGENTA_DARK}MAGENTA_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.MAGENTA_DARK_BG}MAGENTA_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.CYAN}CYAN${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.CYAN_BG}CYAN_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.CYAN_DARK}CYAN_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.CYAN_DARK_BG}CYAN_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.WHITE}WHITE${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.WHITE_BG}WHITE_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.WHITE_DARK}WHITE_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.WHITE_DARK_BG}WHITE_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`${cmd.color.BLACK}BLACK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLACK_BG}BLACK_BG${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLACK_DARK}BLACK_DARK${cmd.color.RESET} `);
		process.stdout.write(`${cmd.color.BLACK_DARK_BG}BLACK_DARK_BG${cmd.color.RESET}\n`);
		
		process.stdout.write(`NORMAL${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.BOLD}BOLD${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.BOLD}END_${cmd.text.END_BOLD}BOLD${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.UNDERLINE}UNDERLINE${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.UNDERLINE}END_${cmd.text.END_UNDERLINE}UNDERLINE${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.ITALICS}ITALICS${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.ITALICS}END_${cmd.text.END_ITALICS}ITALICS${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.STRIKETHROUGH}STRIKETHROUGH${cmd.color.RESET} `);
		process.stdout.write(`${cmd.text.STRIKETHROUGH}END_${cmd.text.END_STRIKETHROUGH}STRIKETHROUGH${cmd.color.RESET} `);
		
		process.stdout.write(`\n\n`);
		
		this.menu([
			{menuAction: MenuActionEnum.MainMenu, command: "mm"},
			{menuAction: MenuActionEnum.JustAnAction, menuText: "do the stuff", data: {"hello": "world"}},
			{menuAction: MenuActionEnum.LastMenu},
		]);
	}
}

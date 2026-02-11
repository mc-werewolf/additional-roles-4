import type { GameEventHandlerMap } from "@mc-werewolf/game-module";
import { ghostSkill } from "./ghost";

export const ghostwolfSkillHandlers: GameEventHandlerMap = {
    "ghost-wolf-obe": async (ev) => {
        return ghostSkill(ev, false);
    },
};

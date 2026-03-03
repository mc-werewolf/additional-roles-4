import type { GameEventHandlerMap } from "@mc-werewolf/game-module";
import { ghostSkill } from "./ghost";
import { WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS } from "../constants/translate";
import { ActionFormData } from "@minecraft/server-ui";
import { world } from "@minecraft/server";

export const ghostwolfSkillHandlers: GameEventHandlerMap = {
    "ghost-wolf-obe": async (ev) => {
        const { playerData: pd, werewolfGameData: we, ingameConstants: c } = ev;
        const player = world.getPlayers().find((p) => p.id === pd.playerId);
        if (!player) return false;

        const form = new ActionFormData()
            .title({
                translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_TITLE,
            })
            .body({
                translate:
                    WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_DESCRIPTION,
            })

            .button({
                translate:
                    WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_SELECTION_INVISIBLE,
            })

            .button({
                translate:
                    WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_SELECTION_VISIBLE,
            });

        const res = await form.show(player);
        if (res.canceled || !res.selection) return false;
        const isVisibility = res.selection === 0;
        return ghostSkill(ev, isVisibility);
    },
};

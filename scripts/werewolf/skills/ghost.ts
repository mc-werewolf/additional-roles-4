import { world, system, GameMode, EffectType } from "@minecraft/server";
import type { GameEventHandlerMap } from "@mc-werewolf/game-module";
import { WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS } from "../constants/translate";
import type { SkillEventContext } from "@mc-werewolf/game-module/lib/game/ingame/game/SkillManager";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { ActionFormData } from "@minecraft/server-ui";

export const ghostSkillHandlers: GameEventHandlerMap = {
    "ghost-obe": async (ev) => {
        return ghostSkill(ev, true);
    },
};

export async function ghostSkill(
    ev: SkillEventContext,
    armorVisibility: boolean,
): Promise<boolean> {
    const { playerData: pd, werewolfGameData: we, ingameConstants: c } = ev;
    const player = world.getPlayers().find((p) => p.id === pd.playerId);
    if (!player) return false;
    player.playSound("random.levelup", { pitch: 0.75, volume: 0.5 });
    player.sendMessage({
        translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_SKILL_START_MESSAGE,
    });
    const body = player.dimension.spawnEntity(`minecraft:armor_stand`, player.location);
    body.setRotation(player.getRotation());
    body.nameTag = `${player.name}`;
    body.addTag("werewolf_additionalroles-4_ghost_body:summon_mybody");
    if (armorVisibility === false) {
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
                    WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_SELECTION_YES,
            })

            .button({
                translate:
                    WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_FORM_SELECTION_NO,
            });

        const res = await form.show(player);
        if (res.canceled || !res.selection) return false;
        if (res.selection === 0) {
            body.addEffect(MinecraftEffectTypes.Invisibility, 20 * 20, {
                amplifier: 0,
                showParticles: false,
            });
        }

        player.playSound("random.orb");
    }
    player.setGameMode(GameMode.Spectator);
    player.nameTag = `§e${player.name}`;
    await system.waitTicks(20 * 10);
    player.sendMessage({
        translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_SKILL_RETURN_MESSAGE,
    });
    player.playSound("random.orb", { pitch: 0.75, volume: 0.5 });
    await system.waitTicks(20);
    if (!body.isValid) {
        player.sendMessage({
            translate:
                WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_SKILL_SEARCH_NOTBODY_MESSAGE,
        });

        player.playSound("random.click", { pitch: 0.75, volume: 0.5 });

        await system.waitTicks(10);
        player.sendMessage({
            translate:
                WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_SKILL_NOTBODY_DEATH_MESSAGE,
        });
        player.kill();

        player.nameTag = `§b${player.name}`;
    } else {
        player.setGameMode(GameMode.Adventure);
        player.playSound("random.levelup", { pitch: 0.75, volume: 0.5 });
        player.teleport(body.location, { rotation: body.getRotation() });
        body.remove();
        player.nameTag = `§f${player.name}`;
    }

    return true;
}

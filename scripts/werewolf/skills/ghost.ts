import { world, system, ItemStack, GameMode } from "@minecraft/server";
import type { GameEventHandlerMap } from "@mc-werewolf/game-module";
import { WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS } from "../constants/translate";

export const ghostSkillHandlers: GameEventHandlerMap = {
    "ghost-obe": async (ev) => {
        const { playerData: pd, werewolfGameData: we, ingameConstants: c } = ev;
        const player = world.getPlayers().find((p) => p.id === pd.playerId);
        if (!player) return false;
        player.playSound("random.levelup", { pitch: 0.75, volume: 0.5 });
        player.sendMessage({
            translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.GHOST_SKILL_START_MESSAGE,
        });
        const body = player.dimension.spawnEntity(`minecraft:armor_stand`, player.location);
        body.setRotation(player.getRotation());
        body.nameTag = `${player.name}`;
        body.addTag(`rolemone:${player.id}`);
        body.addTag("rolemone:summon_mybody");
        player.setGameMode(GameMode.Spectator);
        player.nameTag = `§e${player.name}`;
        await system.waitTicks(20 * 10);
        player.sendMessage({
            translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.GHOST_SKILL_RETURN_MESSAGE,
        });
        player.playSound("random.orb", { pitch: 0.75, volume: 0.5 });
        await system.waitTicks(20);
        if (!body.isValid) {
            player.sendMessage({
                translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.GHOST_SKILL_SEARCH_NOTBODY_MESSAGE,
            });

            player.playSound("random.click", { pitch: 0.75, volume: 0.5 });

            await system.waitTicks(10);
            player.sendMessage({
                translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.GHOST_SKILL_NOTBODY_DEATH_MESSAGE,
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
    },
};

/**
 * めんどくさいしあんまりそういうの追求しない方が
 * いいと思いますよ。
 *
 * めんどくさいし。
 * ほんとうにめんどくさいし。
 * 正直共有させたい
 * 草
 * やっぱ俺の方が合ってるもん！！（？
 */

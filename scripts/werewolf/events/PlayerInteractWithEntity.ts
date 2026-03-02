import {
    EntityComponentTypes,
    EntityHurtAfterEvent,
    PlayerInteractWithEntityBeforeEvent,
} from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";
import { InGamePlayerInteractWithEntity } from "@mc-werewolf/game-module";

InGamePlayerInteractWithEntity.beforeEvent<PlayerInteractWithEntityBeforeEvent>((ev, ctx) => {
    const { target } = ev;

    if (!target.isValid) return;

    if (
        target.typeId === MinecraftEntityTypes.ArmorStand &&
        target.hasTag("werewolf_additionalroles-4_ghost_body:summon_mybody")
    ) {
        ev.cancel = true;
        target.remove();
    }
});

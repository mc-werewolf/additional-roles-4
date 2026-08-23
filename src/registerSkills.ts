import { router } from "@kairo-js/router";
import { werewolf, type SkillContext, type SkillResult } from "@mc-werewolf/module";

const ADDON_ID = "werewolf-additionalroles-4";
const GHOST_DURATION_TICKS = 20 * 10;

werewolf.defineSkills([
    {
        id: "additionalroles-4:ghostProjection",
        name: `${ADDON_ID}.skill.name.ghost`,
        roleId: "ghost",
        target: {
            type: "self",
            count: 0,
        },
        handler: {
            apiName: "additionalroles-4:resolveGhostProjection",
        },
        cooldownTicks: 20 * 150,
        uses: 10,
        priority: 0,
        tags: ["projection", "status"],
    },
    {
        id: "additionalroles-4:ghostWolfProjection",
        name: `${ADDON_ID}.skill.name.ghost-wolf`,
        roleId: "ghost-wolf",
        target: {
            type: "self",
            count: 0,
        },
        handler: {
            apiName: "additionalroles-4:resolveGhostWolfProjection",
        },
        cooldownTicks: 20 * 150,
        uses: 10,
        priority: 0,
        tags: ["projection", "status"],
    },
]);

router.beforeEvents.startup.subscribe((ev) => {
    ev.addonApi.register(
        "additionalroles-4:resolveGhostProjection",
        resolveGhostProjection,
    );
    ev.addonApi.register(
        "additionalroles-4:resolveGhostWolfProjection",
        resolveGhostWolfProjection,
    );
});

function resolveGhostProjection(context: SkillContext): SkillResult {
    return projectionResult(context, false);
}

function resolveGhostWolfProjection(context: SkillContext): SkillResult {
    return projectionResult(context, true);
}

function projectionResult(
    context: SkillContext,
    armorVisible: boolean,
): SkillResult {
    return {
        actions: [
            {
                type: "setStatus",
                targetId: context.actorId,
                statusId: "additionalroles-4:ghostProjection",
                value: {
                    active: true,
                    armorVisible,
                    activatedAtTick: router.currentTick,
                    expiresAtTick: router.currentTick + GHOST_DURATION_TICKS,
                },
            },
            {
                type: "sendMessage",
                toPlayerId: context.actorId,
                message: `${ADDON_ID}.skill.message.ghost.start`,
            },
        ],
    };
}

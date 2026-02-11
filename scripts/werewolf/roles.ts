import {
    DefinitionRegistry,
    type RoleDefinition,
    type RoleGroupDefinition,
} from "@mc-werewolf/game-module";
import { WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS } from "./constants/translate";

export const roleGroups: RoleGroupDefinition[] = [];

export const roles: RoleDefinition[] = [
    {
        id: "ghost",
        name: { translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.ROLE_NAME_GHOST },
        description: {
            translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.ROLE_DESCRIPTION_GHOST,
        },
        factionId: "villager",
        sortIndex: 403,
        skills: [
            {
                id: "ghost-obe",
                name: {
                    translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_SKILL_NAME,
                },
                cooldown: 150,
                maxUses: 10,
            },
        ],
        handleGameEvents: {
            SkillUse: { skillId: "ghost-obe" },
        },
    },

    {
        id: "ghost-wolf",
        name: { translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.ROLE_NAME_GHOST_WOLF },
        description: {
            translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.ROLE_DESCRIPTION_GHOST_WOLF,
        },
        factionId: "werewolf",
        sortIndex: 404,
        skills: [
            {
                id: "ghost-wolf-obe",
                name: {
                    translate: WEREWOLF_ADDITIONALROLES_FOUR_TRANSLATE_IDS.GHOST_WOLF_SKILL_NAME,
                },
                cooldown: 150,
                maxUses: 10,
            },
        ],
        handleGameEvents: {
            SkillUse: { skillId: "ghost-wolf-obe" },
        },
    },
];

DefinitionRegistry.roleGroups.register(roleGroups);
DefinitionRegistry.roles.register(roles);

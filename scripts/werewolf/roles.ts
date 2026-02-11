import {
    DefinitionRegistry,
    type RoleDefinition,
    type RoleGroupDefinition,
} from "@mc-werewolf/game-module";
import { WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS } from "./constants/translate";

export const roleGroups: RoleGroupDefinition[] = [];

export const roles: RoleDefinition[] = [
    {
        id: "ghost",
        name: { translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.ROLE_NAME_GHOST },
        description: { translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.ROLE_DESCRIPTION_GHOST },
        factionId: "villager",
        count: { max: 10 },
        sortIndex: 706001,
        skills: [
            {
                id: "ghost-obe",
                name: {
                    translate: WEREWOLF_ROLEMONE_PACK_TRANSLATE_IDS.GHOST_SKILL_NAME,
                },
                cooldown: 10,
                maxUses: 10,
            },
        ],
        color: "§a",
        handleGameEvents: {
            SkillUse: { skillId: "ghost-obe" },
        },
    },
];

DefinitionRegistry.roleGroups.register(roleGroups);
DefinitionRegistry.roles.register(roles);

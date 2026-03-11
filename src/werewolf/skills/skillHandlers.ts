import { ghostSkillHandlers } from "./ghost";
import { DefinitionRegistry, type GameEventHandlerMap } from "@mc-werewolf/game-module";
import { ghostwolfSkillHandlers } from "./ghost-wolf";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {
    ghost: ghostSkillHandlers,
    "ghost-wolf": ghostwolfSkillHandlers,
};

DefinitionRegistry.roleSkillHandlers.register(roleSkillHandlers);

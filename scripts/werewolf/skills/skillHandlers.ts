import { ghostSkillHandlers } from "./ghost";
import { DefinitionRegistry, type GameEventHandlerMap } from "@mc-werewolf/game-module";

export const roleSkillHandlers: Record<string, GameEventHandlerMap> = {
    ghost: ghostSkillHandlers
};

DefinitionRegistry.roleSkillHandlers.register(roleSkillHandlers);

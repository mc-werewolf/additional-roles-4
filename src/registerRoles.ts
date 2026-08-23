import { werewolf } from "@mc-werewolf/module";

const PREFIX = "werewolf-additionalroles-4";

werewolf.defineRoles([
    {
        id: "ghost",
        name: `${PREFIX}.role.name.ghost`,
        description: `${PREFIX}.role.description.ghost`,
        faction: "village",
        divinationResult: "village",
        index: 403,
    },
    {
        id: "ghost-wolf",
        name: `${PREFIX}.role.name.ghost-wolf`,
        description: `${PREFIX}.role.description.ghost-wolf`,
        faction: "werewolf",
        divinationResult: "werewolf",
        index: 404,
    },
]);

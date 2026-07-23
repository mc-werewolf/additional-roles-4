import type { KairoAddonProperties } from "@kairo-js/router";

/**
 * 譁・忰縺ｫ # 縺瑚ｨ倩ｿｰ縺輔ｌ縺ｦ縺・ｋ邂・園繧帝←螳應ｿｮ豁｣縺励※菴ｿ逕ｨ縺励∪縺吶・
 * Modify and use where # is written at the end of the sentence as appropriate
 */
export const properties: KairoAddonProperties = {
    id: "werewolf-additionalroles-4", // a-z & 0-9 - _
    metadata: {
        authors: ["shizuku86", "Lemonesan123"],
    },
    header: {
        name: "Werewolf Additional Roles IV",
        description: "The fourth expansion pack introducing new roles to the Werewolf game.",
        version: {
            major: 0,
            minor: 1,
            patch: 0,
        },
        min_engine_version: { major: 1, minor: 21, patch: 132 },
    },
    minecraftDependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.8.0",
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0",
        },
    ],
    /** 蜑肴署繧｢繝峨が繝ｳ */
    dependencies: {
        /**
         * id: version (string) // "kairo": "1.0.0"
         */
        kairo: "^1.0.0-beta.0",
        "kairo-database": "^1.0.0-beta.0",
        "werewolf-gamemanager": "^0.1.0",
    },
    tags: [],
};

import type { KairoAddonProperties } from "@kairo-js/router";

/**
 * 文末に # が記述されている箇所を適宜修正して使用します。
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
            major: 1,
            minor: 0,
            patch: 0,
            // prerelease: "preview.1",
            // build: "abc123",
        },
        min_engine_version: [1, 21, 132],
    },
    dependencies: [
        {
            module_name: "@minecraft/server",
            version: "2.5.0",
        },
        {
            module_name: "@minecraft/server-ui",
            version: "2.0.0",
        },
    ],
    /** 前提アドオン */
    requiredAddons: {
        /**
         * id: version (string) // "kairo": "1.0.0"
         */
        "werewolf-gamemanager": "1.0.0-dev.1",
    },
    tags: [],
};

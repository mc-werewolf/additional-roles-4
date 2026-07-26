import { router } from "@kairo-js/router";
import { properties } from "./properties";

router.init(properties);

router.afterEvents.addonActivate.subscribe(() => {
    console.info("[werewolf-additionalroles-4] Activated");
});

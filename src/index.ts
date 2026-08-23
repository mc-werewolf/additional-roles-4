import { router } from "@kairo-js/router";
import { properties } from "./properties";
import "./registerRoles";
import "./registerSkills";

router.init(properties);

router.afterEvents.addonActivate.subscribe(() => {
    console.info("[werewolf-additionalroles-4] Activated");
});

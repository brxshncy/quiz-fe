import type { Router } from "vue-router";

export function navigateTo(router: Router, route: string) {
  console.log(router);
  router.push(route);
}

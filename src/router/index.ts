import { createRouter, createWebHistory, RouterLink } from "vue-router";
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

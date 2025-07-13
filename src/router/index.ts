import { createRouter, createWebHistory, RouterLink } from "vue-router";
import routes from "virtual:generated-pages";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  // Check if user is authenticated by looking at localStorage
  const authToken = localStorage.getItem("auth_token");
  const user = localStorage.getItem("user");
  const isAuthenticated = !!authToken && !!user;

  // Check if route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to sign-in page
    next("/auth/user/sign-in");
  } else if (to.meta.requiresAdmin) {
    // Check if user is admin
    if (isAuthenticated) {
      try {
        const userData = JSON.parse(user);
        if (userData.role === "admin") {
          next();
        } else {
          next("/");
        }
      } catch (error) {
        next("/auth/user/sign-in");
      }
    } else {
      next("/auth/user/sign-in");
    }
  } else {
    next();
  }
});

export default router;

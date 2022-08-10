import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "services",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    component: () => import("../views/Resources.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;

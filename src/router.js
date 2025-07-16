import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/homes.vue";
import Community from "./pages/community.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/community", component: Community },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

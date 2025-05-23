import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Assistir from "../views/Assistir.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/assistir",
      name: "assistir",
      component: Assistir,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import JobsView from "@/views/JobsView.vue";
import HomeView from "@/views/HomeView.vue";
import ConferenceView from "@/views/ConferenceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/conference",
      name: "conference",
      component: ConferenceView,
    },
  ],
});

export default router;

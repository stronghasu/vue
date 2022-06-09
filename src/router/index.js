import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ReferView from "../views/ReferView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MovieView from "../views/MovieView.vue";
import ContactView from "../views/ContactView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/reference",
    name: "Reference",
    component: ReferView,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "Movie",
    component: MovieView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

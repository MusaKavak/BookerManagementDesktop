import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";

const routes: RouteRecordRaw[] = [
    { path: "/home", component: Home },
    { path: '/:pathMatch(.*)', component: NotFound }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
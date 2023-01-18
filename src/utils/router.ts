import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/home.vue";
import NotFound from "../components/notFound.vue";
import EmployeeManagement from "../components/management-pages/employeeManagement.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: Home },
    { path: "/employees", component: EmployeeManagement },
    { path: '/:pathMatch(.*)', component: NotFound }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
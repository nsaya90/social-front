import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import ProfilView from "../views/ProfilView.vue";
import PostView from "../views/PostView.vue";
import PostThreadView from "../views/PostThreadView.vue";
import CommentView from "../views/CommentView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/comment",
        name: "Comment",
        component: CommentView,
    },
    {
        path: "/post-thread",
        name: "PostThread",
        component: PostThreadView,
    },
    {
        path: "/post",
        name: "Post",
        component: PostView,
    },
    {
        path: "/register",
        name: "Register",
        component: RegisterView,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginView,
    },
    {
        path: "/profil",
        name: "Profil",
        component: ProfilView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "../views/RegisterView.vue";

import ProfilView from "../views/ProfilView.vue";
import PostView from "../views/PostView.vue";
import PostThreadView from "../views/PostThreadView.vue";
import CommentView from "../views/CommentView.vue";
import HomePage from "../views/HomePage.vue";
import UpdateProfilView from "../views/UpdateProfilView.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
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
        path: "/profil",
        name: "Profil",
        component: ProfilView,
    },
    {
        path: "/update-profil",
        name: "update-profil",
        component: UpdateProfilView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

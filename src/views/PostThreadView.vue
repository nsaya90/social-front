<template>
    <NavUser />
    <div class="wrapper-thread">
        <h1>Fil d'actualités</h1>

        <div class="box_post" v-for="elem in infos" :key="elem.id">
            <Post
                class="card-post"
                :path="`http://localhost:8000/storage/${elem.image}`"
                :firstname="`${elem.firstname}`"
                :lastname="`${elem.lastname}`"
            ></Post>

            <ButtonLike
                @click="likePost(elem.id, elem.id_user)"
                :like="`${elem.like}`"
                :icon="`https://img.icons8.com/windows/32/null/filled-like.png`"
                class="btn_like"
                v-if="elem.like"
            ></ButtonLike>

            <ButtonLike
                v-else
                @click="likePost(elem.id, elem.id_user)"
                :like="`${elem.like}`"
                :icon="`https://img.icons8.com/ios-glyphs/32/null/hearts.png`"
                class="btn_like"
            ></ButtonLike>

            <Post :description="`${elem.description}`"></Post>
        </div>
    </div>
</template>

<script>
const token = localStorage.getItem("token");
const idUser = localStorage.getItem("id");
console.log(idUser);
// const id_post = localStorage.getItem("id_post");

import axios from "axios";

import NavUser from "../components/NavUser.vue";

import ButtonLike from "@/components/ButtonLike.vue";
import Post from "@/components/Post.vue";

export default {
    name: "PostThreadView",
    components: { NavUser, ButtonLike, Post },
    data() {
        return {
            post: "",
            infos: "",
            dislike: "",
            image: "",
            infoLikes: "",
            infoDisLikes: "",
            like: "",
            countLike: "",
        };
    },

    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/all-post",
        }).then((response) => (this.infos = response.data.allPost));
        console.log(this.infos);

        this.image = this.infos.image;
    },

    methods: {
        async likePost(id_post, id_user) {
            localStorage.setItem("id_post", id_post);
            axios({
                method: "post",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/like/" + id_post + "/" + idUser,
                data: {
                    idPost: id_post,
                },
            }).then((response) => (this.like = response));
            // relance de la requête pour afficher le nombre de like
            await axios({
                method: "get",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/all-post",
            }).then((response) => (this.infos = response.data.allPost));
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* CSS */

    .wrapper-thread h1 {
        text-align: center;
        display: flex;
    }

    .box_post {
        background: white;
        border-bottom: #d5d5d5 20px;
    }

    .card-post {
        margin-left: 10px;
    }
}
</style>

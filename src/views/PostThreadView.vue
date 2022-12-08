<template>
    <NavUser />
    <div class="wrapper-thread">
        <h1>Fil d'actualitée</h1>

        <div class="box_post" v-for="elem in infos" :key="elem.id">
            <Post
                :path="`http://localhost:8000/storage/${elem.image}`"
                :title="`${elem.title}`"
                :description="`${elem.description}`"
                :key="postReload"
            ></Post>
            <div class="box_btn">
                <div class="box_btn_like">
                    <ButtonLike
                        @click="likePost(elem.id, elem.id_user)"
                        :like="`${elem.like}`"
                    ></ButtonLike>
                </div>
            </div>
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
            postReload: 0,
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

    .btn_like {
        font-size: 17px;
    }
    .box_btn {
        display: flex;
        justify-content: center;

        height: auto;
    }

    .box_post {
        border-bottom: #000000 solid 1px;
        margin: 0;
    }
}
</style>

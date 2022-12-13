<template>
    <NavUser />
    <div class="wrapper-thread">
        <div class="box_post" v-for="elem in infos" :key="elem.id">
            <Post
                class="card-post"
                :path="`http://localhost:8000/storage/${elem.image}`"
                :firstname="`${elem.firstname}`"
                :lastname="`${elem.lastname}`"
            ></Post>
            <div class="test">
                <ButtonLike
                    @click="likePost(elem.id, elem.id_user)"
                    :like="`${elem.like}`"
                    :icon="`https://img.icons8.com/windows/32/null/filled-like.png`"
                    class="btn_like"
                    v-if="elem.like"
                ></ButtonLike>

                <button-like
                    v-else
                    @click="likePost(elem.id, elem.id_user)"
                    :like="`${elem.like}`"
                    :icon="`https://img.icons8.com/ios-glyphs/32/null/hearts.png`"
                    class="btn_like"
                ></button-like>

                <button-comment
                    @click="commentPost(elem.id)"
                    :icon="`https://img.icons8.com/ios/32/000000/comments.png`"
                    class="btn_like"
                ></button-comment>
            </div>

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
import ButtonComment from "@/components/ButtonComment.vue";

export default {
    name: "PostThreadView",
    components: { NavUser, ButtonLike, Post, ButtonComment },
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

        commentPost(id_post) {
            localStorage.setItem("id_post", id_post);
            location = "http://localhost:8080/comment";
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
        border-bottom: #d5d5d5 solid 7px;
    }

    .card-post {
        margin-left: 10px;
    }

    .test {
        display: flex;
        justify-content: space-around;
    }

    .button-16 {
        display: flex;
        align-items: center;
        background-color: white;
        border: none;
        border-radius: 4px;
        color: #3c4043;
        cursor: pointer;
        font-family: arial, sans-serif;
        font-size: 14px;
        height: 36px;
        line-height: 27px;
        min-width: 54px;
        padding: 0 16px;
        text-align: center;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: pre;
    }

    .button-16:hover {
        border-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
        color: #202124;
    }

    .button-16:focus {
        border-color: #4285f4;
        outline: none;
    }
}
</style>

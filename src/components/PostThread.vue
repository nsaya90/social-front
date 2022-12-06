<template>
    <NavUser />
    <div class="wrapper-thread">
        <h1>Fil d'actualité</h1>
        <div class="box_post" v-for="elem in infos" :key="elem.id">
            <img
                class="box-img"
                :src="`http://localhost:8000/storage/${elem.image}`"
            />
            <p class="post-title">{{ elem.title }}</p>
            <p class="post-desc">{{ elem.description }}</p>

            <div class="box_btn">
                <div class="box_btn_like">
                    <button
                        :class="likeUp"
                        @click="likePost(elem.id, elem.id_user)"
                    >
                        Like
                        <i class="fa fa-thumbs-up">{{ infoLikes }}</i>
                    </button>
                </div>
                <div class="box_btn_dislike">
                    <button class="btn_dislike" @click="dislikePost(elem.id)">
                        Dislike
                        <i class="fa fa-thumbs-down">{{ infoDisLikes }}</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const token = localStorage.getItem("token");
// const id_post = localStorage.getItem("id_post");

import axios from "axios";

import NavUser from "../components/NavUser.vue";
export default {
    name: "PostThread",
    components: { NavUser },
    data() {
        return {
            post: "",
            infos: "",
            like: "",
            dislike: "",
            image: "",
            infoLikes: "",
            infoDisLikes: "",
            likeUp: "",
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

        // await axios({
        //     method: "get",
        //     headers: { Authorization: `Bearer ${token}` },
        //     url: "http://127.0.0.1:8000/api/countLike/" + id_post,
        // }).then((response) => (this.infoLikes = response.data.likes));
        // console.log(this.infoLikes);
    },
    methods: {
        async likePost(id_post, id_user) {
            axios({
                method: "post",
                headers: { Authorization: `Bearer ${token}` },
                url:
                    "http://127.0.0.1:8000/api/like/" + id_post + "/" + id_user,
                data: {
                    idPost: id_post,
                },
            }).then((response) => (this.like = response));

            localStorage.setItem("id_post", id_post);
            console.log(this.like);
            this.likeUp = "btn_likeUp";
        },

        async dislikePost(id) {
            axios({
                method: "post",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/dislikePost/" + id,
                data: {
                    id_post: id,
                },
            }).then((response) => (this.dislike = response));
            console.log(this.dislike);
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .btn_likeUp {
        color: blue;
    }
    .btn_like,
    .btn_dislike {
        font-size: 17px;
    }
    .box_btn {
        display: flex;
        height: 25px;
    }

    .box-img {
        width: 250px;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .box_post {
        border: 2px black solid;
        margin: 0;
    }
    .post-title {
        background: #bad7dd;
        height: 50px;
        margin: 0;
        font-weight: bolder;
    }
    .post-desc {
        background: #bad7dd;
        height: auto;
        margin: 0;
    }
}
</style>

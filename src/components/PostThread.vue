<template>
    <NavUser />
    <div class="wrapper-thread">
        <h1>Fil d'actualitée</h1>
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
                        class="button-23"
                        @click="likePost(elem.id, elem.id_user)"
                    >
                        Like
                        <i class="fa fa-thumbs-up">{{ elem.like }}</i>
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
            const myTimeout = setTimeout(() => {
                location.reload();
            }, 3000);
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* CSS */
    .button-23 {
        background-color: #ffffff;
        border: 1px solid #222222;
        border-radius: 8px;
        box-sizing: border-box;
        color: #222222;
        cursor: pointer;
        display: inline-block;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
            "Helvetica Neue", sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin: 0;
        outline: none;
        padding: 13px 23px;
        position: relative;
        text-align: center;
        text-decoration: none;
        touch-action: manipulation;
        transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
            transform 0.1s;
        user-select: none;
        -webkit-user-select: none;
        width: auto;
    }

    .button-23:focus-visible {
        box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
        transition: box-shadow 0.2s;
    }

    .button-23:active {
        background-color: #f7f7f7;
        border-color: #000000;
        transform: scale(0.96);
    }

    .button-23:disabled {
        border-color: #dddddd;
        color: #dddddd;
        cursor: not-allowed;
        opacity: 1;
    }
    .btn_like {
        font-size: 17px;
    }
    .box_btn {
        display: flex;
        justify-content: center;

        height: auto;
    }

    .box-img {
        width: 250px;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .box_post {
        border-bottom: #000000 solid 1px;
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

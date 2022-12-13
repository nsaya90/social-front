<template>
    <NavUser />
    <div class="box_post" v-for="elem in infos" :key="elem.id">
        <Post
            class="card-post"
            :path="`http://localhost:8000/storage/${elem.image}`"
            :firstname="`${elem.firstname}`"
            :lastname="`${elem.lastname}`"
        ></Post>
        <post :description="`${elem.description}`"></post>

        <div class="box_comment" v-for="value in getComment" :key="value.id">
            <p class="user-info">
                {{ value.firstname }} {{ value.lastname }}
                <span class="comment">{{ value.comment }}</span>
            </p>
        </div>
    </div>
    <div class="box_addComment">
        <form action="" @submit.prevent>
            <textarea
                v-model="commentaire"
                placeholder="Ajout d'un commentaire"
            ></textarea>
            <button-comment
                @click="addComment"
                :name="'Publier'"
            ></button-comment>
        </form>
    </div>
</template>

<script>
import axios from "axios";

import Post from "@/components/Post.vue";
import ButtonComment from "@/components/ButtonComment.vue";
import NavUser from "@/components/NavUser.vue";

const idPost = localStorage.getItem("id_post");
const token = localStorage.getItem("token");

export default {
    name: "CommentView",
    components: { Post, ButtonComment, NavUser },
    data() {
        return { infos: "", postComment: "", commentaire: "", getComment: "" };
    },

    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/comment/" + idPost,
        }).then((response) => (this.infos = response.data.comment));
        // console.log(this.infos);

        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/showComment/" + idPost,
        }).then((response) => (this.getComment = response.data.getComment));
        console.log(this.getComment);
    },
    methods: {
        async addComment() {
            await axios({
                method: "post",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/addComment",

                data: {
                    id_post: idPost,
                    comment: this.commentaire,
                },
            })
                .then((response) => (this.postComment = response.data))
                .catch((error) => {
                    console.log(error);
                });
            console.log(this.postComment);

            await axios({
                method: "get",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/showComment/" + idPost,
            }).then((response) => (this.getComment = response.data.comment));
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .box_comment {
        height: auto;
    }
    .user-info {
        font-weight: bolder;
    }
    span.comment {
        font-weight: lighter;
    }

    .box_addComment {
        border: 2px solid black;
        border-radius: 2em;
        height: 50px;
        margin-top: 15px;
        display: flex;
        justify-content: center;
    }

    .box_addComment form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .box_addComment form textarea,
    form textarea:focus {
        outline: none;
        border: none;
    }
}
</style>

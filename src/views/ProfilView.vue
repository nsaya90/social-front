<template>
    <NavUser />
    <div class="wrapper_profil">
        <div class="box_user-name">
            <h3>{{ firstname }} {{ lastname }}</h3>
            <button class="btn_form-update" @click="formUpdate">
                Modifier le profil
            </button>
        </div>

        <div class="box-userPost" v-for="item in post_user" :key="item.id">
            <Post
                class="card-post"
                :path="`http://localhost:8000/storage/${item.image}`"
                :firstname="`${item.firstname}`"
                :lastname="`${item.lastname}`"
            ></Post>
            <div class="box_info-user">
                <p>
                    {{ item.firstname }} {{ item.lastname }}
                    <span class="description">{{ item.description }}</span>
                </p>
                <p class="date">Publié le {{ item.date_post }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import NavUser from "../components/NavUser.vue";
import Post from "@/components/Post.vue";

const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");

console.log(idUser);
export default {
    name: "ProfilView",
    components: { NavUser, Post },

    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            info: "",
            infoUpdate: "",
            update: "",
            errors: "",
            post_user: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/profil/" + idUser,
        }).then((response) => (this.info = response.data.user));

        this.firstname = this.info.firstname;
        this.lastname = this.info.lastname;
        console.log(this.info);

        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/user-post/" + idUser,
        }).then((response) => (this.post_user = response.data.post_user));

        // console.log(this.post_user);
    },
    methods: {
        formUpdate() {
            this.$router.push({ name: "update-profil" });
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_profil {
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    span.description {
        font-weight: lighter;
    }
    .box_info-user {
        font-weight: bolder;
        margin: 5px;
    }
    .box_info {
        background: #f1e9db;
        padding: 15px;
        text-align: center;
    }

    .box_update {
        background: #a7d0dd;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form_update {
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    .form_update input {
        margin: 10px;
        height: 25px;
    }

    .btn_form-update {
        background-color: lightgray;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: 30px;
        font-weight: bolder;
        border-radius: 0.5em;
        width: 90%;
    }

    .lien_register {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        font-size: small;
    }
    .box_user-name {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .box_user-name h3 {
        margin-left: 5px;
    }
}
</style>

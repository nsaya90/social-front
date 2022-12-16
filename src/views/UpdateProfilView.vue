<template>
    <NavUser />
    <div class="wrapper_profil">
        <!-- <div class="box_info">
            <h2>Votre profil</h2>
            <p>Nom : {{ info.firstname }}</p>
            <p>Prénom : {{ info.lastname }}</p>
            <p>Email : {{ info.email }}</p>
        </div> -->

        <div class="box_update">
            <form class="form_update" action="" @submit.prevent>
                <input
                    class="form_input"
                    type="text"
                    placeholder="Nom"
                    v-model="firstname"
                />
                <p
                    class="errors"
                    v-if="this.errors.firstname"
                    v-text="errors.firstname[0]"
                ></p>

                <input
                    class="form_input"
                    type="text"
                    placeholder="Prénom"
                    v-model="lastname"
                />
                <p
                    class="errors"
                    v-if="this.errors.lastname"
                    v-text="errors.lastname[0]"
                ></p>

                <input
                    class="form_input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />
                <p
                    class="errors"
                    v-if="this.errors.email"
                    v-text="errors.email[0]"
                ></p>

                <input
                    class="form_input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                />
                <p
                    class="errors"
                    v-if="this.errors.password"
                    v-text="errors.password[0]"
                ></p>
                <button class="form_update" @click="userUpdate">Validez</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import NavUser from "../components/NavUser.vue";

const idUser = localStorage.getItem("id");
const token = localStorage.getItem("token");

console.log(idUser);
export default {
    name: "UpdateProfilView",
    components: { NavUser },
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
        };
    },
    async mounted() {
        await axios({
            method: "get",
            headers: { Authorization: `Bearer ${token}` },
            url: "http://127.0.0.1:8000/api/profil/" + idUser,
        }).then((response) => (this.info = response.data.user));
    },
    methods: {
        async userUpdate() {
            await axios({
                method: "put",
                headers: { Authorization: `Bearer ${token}` },
                url: "http://127.0.0.1:8000/api/profil/" + idUser,

                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => (this.infoUpdate = response))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });

            console.log(this.infoUpdate);
            console.log("test");
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_profil {
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    span.description {
        font-weight: lighter;
    }
    .box_info-user {
        font-weight: bolder;
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

    .btn_update {
        background-color: lightgray;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: 30px;
        color: white;
        font-weight: inherit;
        border-radius: 0.5em;
    }

    .btn_update button:disabled,
    button[disabled] {
        border: 1px solid #999999;
        background-color: #4286f4be;
    }
}
</style>

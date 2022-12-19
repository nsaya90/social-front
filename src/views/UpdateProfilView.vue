<template>
    <NavUser />
    <div class="wrapper_update">
        <div class="box_update">
            <form class="form_update" action="" @submit.prevent>
                <div class="box_input">
                    <p>Nom</p>
                    <input
                        class="form_input"
                        type="text"
                        :placeholder="info.firstname"
                        v-model="firstname"
                    />
                </div>
                <p
                    class="errors"
                    v-if="this.errors.firstname"
                    v-text="errors.firstname[0]"
                ></p>

                <div class="box_input">
                    <p>Prénom</p>
                    <input
                        class="form_input"
                        type="text"
                        :placeholder="info.lastname"
                        v-model="lastname"
                    />
                </div>
                <p
                    class="errors"
                    v-if="this.errors.lastname"
                    v-text="errors.lastname[0]"
                ></p>

                <div class="box_input">
                    <p>Email</p>
                    <input
                        class="form_input"
                        type="email"
                        :placeholder="info.email"
                        v-model="email"
                    />
                </div>
                <p
                    class="errors"
                    v-if="this.errors.email"
                    v-text="errors.email[0]"
                ></p>

                <div class="box_input">
                    <p>Mot de passe</p>
                    <input
                        class="form_input"
                        type="password"
                        v-model="password"
                    />
                </div>
                <p
                    class="errors"
                    v-if="this.errors.password"
                    v-text="errors.password[0]"
                ></p>
                <button
                    class="btn_update"
                    :disabled="isDisabled"
                    @click="userUpdate"
                >
                    Validez
                </button>
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
            buttonUpdate: "",
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
    computed: {
        isDisabled() {
            if (
                this.email === "" ||
                this.password === "" ||
                this.firstname === "" ||
                this.lastname === ""
            ) {
                return this.buttonUpdate == false;
            }
        },
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
    .wrapper_update {
        height: 50vh;
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

    .form_update {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        height: 340px;
    }
    .form_update input {
        height: 35px;
        background-color: white;
        border: 0;
        padding-left: 15px;
    }

    .btn_update {
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: 40px;
        color: white;
        font-weight: inherit;
        font-size: medium;
        border-radius: 0.5em;
        background-color: #4285f4;
    }

    .btn_update button:disabled,
    button[disabled] {
        border: 1px solid #999999;
        background-color: #4286f4be;
    }
    .box_input {
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box_input p {
        font-weight: bolder;
    }
}
</style>

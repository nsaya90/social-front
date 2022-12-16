<template>
    <div class="wrapper_home">
        <form class="form_login" action="" @submit.prevent>
            <router-link to="/"
                ><img
                    src="../assets/logo_social.png"
                    alt="logo"
                    width="280"
                    height="160"
                    class="logo"
                />
            </router-link>
            <p>{{ message }}</p>
            <input
                class="form_input"
                type="email"
                placeholder="Email"
                v-model="email"
            />
            <p
                class="errors"
                v-if="this.infoUser"
                v-text="this.infoUser.error_mail"
            ></p>

            <input
                class="form_input"
                type="password"
                placeholder="Mot de passe"
                v-model="password"
            />
            <p
                class="errors"
                v-if="this.infoUser"
                v-text="this.infoUser.error_password"
            ></p>

            <button class="btn_login" :disabled="isDisabled" @click="login">
                Se connecter
            </button>
            <div class="lien_register">
                <p>
                    Vous n'avez pas de compte ?
                    <router-link to="/register">Inscrivez-vous</router-link>
                </p>
            </div>
        </form>
        <v-footer class="footer">
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} —
                <strong>Nicolas SAYATHAM</strong>
            </v-col>
        </v-footer>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "HomePage",
    data() {
        return {
            email: "",
            password: "",
            message: "",
            infoUser: "",
            errors: "",
            buttonLogin: "",
        };
    },
    computed: {
        isDisabled() {
            if (this.email === "" || this.password === "") {
                return this.buttonLogin == false;
            }
        },
    },
    methods: {
        async login() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/login",

                data: {
                    email: this.email,
                    password: this.password,
                },
            }).then((response) => (this.infoUser = response.data));

            console.log(this.infoUser);

            localStorage.setItem("token", this.infoUser.token);

            // console.log(this.info.id_user);

            if (this.infoUser.succes) {
                localStorage.setItem("id", this.infoUser.id_user);

                location = "http://localhost:8080/profil";
            } else {
                this.message = "Mauvais identifiant";
            }
        },
    },
};
</script>
<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_home {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 90vh;
    }

    .form_login {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 325px;
        text-align: center;
        margin-top: 25px;
    }
    .form_login input {
        margin-bottom: 10px;
        padding-left: 15px;
        height: 35px;
        background-color: rgb(243, 239, 239);
        border-radius: 0.5em;
        border: lightgrey;
    }

    input::placeholder {
        color: gray;
        padding-left: 10px;
        opacity: 1;
    }
    .btn_login {
        background-color: #4285f4;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: 30px;
        color: white;
        font-weight: inherit;
        border-radius: 0.5em;
    }

    .btn_login button:disabled,
    button[disabled] {
        border: 1px solid #999999;
        background-color: #4286f4be;
        color: white;
    }
    .lien_register {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        font-size: small;
    }
}
</style>

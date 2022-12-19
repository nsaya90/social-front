<template>
    <div class="wrapper_register">
        <div class="box_titre_register">
            <h2>Inscription</h2>
        </div>
        <div class="box_register">
            <form class="form_register" action="" @submit.prevent>
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
                <button
                    :disabled="isDisabled"
                    class="btn_register"
                    @click="register"
                >
                    Inscription
                </button>
            </form>

            <h2>{{ message }}</h2>
        </div>
        <div class="box_lien_login">
            <p>
                Vous possedez déjà un compte ?
                <router-link to="/">Connectez-vous</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "RegisterView",
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            message: "",
            info: "",
            errors: "",
            buttonRegister: "",
        };
    },
    computed: {
        isDisabled() {
            if (
                this.email === "" ||
                this.password === "" ||
                this.firstname === "" ||
                this.lastname === ""
            ) {
                return this.buttonRegister == false;
            }
        },
    },
    methods: {
        async register() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/register",

                data: {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                },
            })
                .then((response) => (this.info = response.data))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });

            // this.$router.replace({ path: "/login" });

            console.log(this.info.error_mail);

            if (this.info.error_mail) {
                this.message = this.info.error_mail;
            } else {
                location = "http://localhost:8080/";
            }

            console.log(this.info);
        },
    },
};
</script>
<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* Styles pour cette Media Queries */

    .form_register {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 260px;
        text-align: center;
        margin-top: 60px;
    }
    .form_register input {
        margin-bottom: 10px;
        height: 35px;
        background-color: rgb(243, 239, 239);
        border-radius: 0.5em;
        border: lightgrey;
        padding-left: 15px;
    }

    .wrapper_register {
        height: 100vh;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box_register {
        height: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .box_titre_register {
        text-align: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: small;
    }

    .btn_register {
        background-color: #4285f4;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        height: 50px;
        color: white;
        font-size: 15px;
        font-weight: 500;
        border-radius: 0.5em;
        width: 100%;
    }

    .btn_register input {
        width: 100%;
    }

    .btn_register button:disabled,
    button[disabled] {
        border: 1px solid #999999;
        background-color: #4286f4be;
        color: white;
    }

    .errors {
        color: red;
        font-family: "Courier New", Courier, monospace;
        font-size: small;
        margin: 0;
    }

    .box_lien_login {
        font-size: small;
    }
    .box_titre_register {
        border-bottom: 2px lightgray solid;
        width: 100%;
    }
}
</style>

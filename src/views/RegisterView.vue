<template>
    <div class="wrapper_register">
        <div class="box_titre_register">
            <h2>
                Inscrivez-vous pour voir les publications et musiques de vos
                amis.
            </h2>
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
                <button class="btn_register" @click="register">
                    Inscription
                </button>
            </form>

            <h2>{{ message }}</h2>

            <div class="box_lien_login">
                <p>
                    Vous possedez déjà un compte ?
                    <router-link to="/login">Connectez-vous</router-link>
                </p>
            </div>
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
        };
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

            console.log(this.info.error_mail);

            if (this.info.error_mail) {
                this.message = this.info.error_mail;
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
        background: #f1e9db;
        border-radius: 10px;
        height: 70%;
        padding: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .form_register input {
        margin: 15px;
        height: 30px;
        width: 200px;
    }

    .form_register input:focus {
        transform: translateX(15px);
        transition: transform 200ms;
    }
    .placeholder,
    ::placeholder {
        color: #5db7de;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 15px;
    }

    .wrapper_register {
        height: 87vh;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box_register {
        height: 700px;
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
        position: relative;
        font-size: 17px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1em 1.5em;
        display: inline-block;
        border-radius: 6em;
        transition: all 0.2s;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: white;
        background-color: #5db7de;
        margin: 10px;
    }

    .btn_register:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn_register:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn_register::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    .btn_register::after {
        background-color: #fff;
    }

    .btn_register:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
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
}
</style>

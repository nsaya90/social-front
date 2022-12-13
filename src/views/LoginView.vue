<template>
    <div class="wrapper_login">
        <div class="box_titre_login">
            <h2>Connexion</h2>
        </div>
        <div class="box_login">
            <form class="form_login" action="" @submit.prevent>
                <p>{{ message }}</p>
                <input
                    class="form_input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                />
                <p
                    class="errors"
                    v-if="this.info"
                    v-text="this.info.error_mail"
                ></p>

                <input
                    class="form_input"
                    type="password"
                    placeholder="Mot de passe"
                    v-model="password"
                />
                <p
                    class="errors"
                    v-if="this.info"
                    v-text="this.info.error_password"
                ></p>

                <button class="btn_login" @click="login">Connexion</button>
            </form>
        </div>
        <div class="box_lien_register">
            <p>
                Vous n'avez pas de compte ?
                <router-link to="/register">Inscrivez-vous</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "LoginView",
    data() {
        return {
            email: "",
            password: "",
            message: "",
            info: "",
            errors: "",
        };
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
            }).then((response) => (this.info = response.data));

            console.log(this.info);

            localStorage.setItem("token", this.info.token);

            // console.log(this.info.id_user);

            if (this.info.succes) {
                localStorage.setItem("id", this.info.id_user);

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
    /* Styles pour cette Media Queries */

    .form_login {
        height: 80%;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .form_login input {
        margin: 10px;
        height: 30px;
        width: 200px;
    }

    .form_login input:focus {
        transform: translateX(15px);
        transition: transform 200ms;
    }

    .form_login label {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 17px;
    }
    .wrapper_login {
        height: 100vh;
        flex-direction: column;
        display: flex;
        align-items: center;
    }
    .box_login {
        height: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form_input {
        font-family: "Roboto", sans-serif;
    }

    .btn_login {
        margin: 20px;
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
    }

    .btn_login:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn_login:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn_login::after {
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

    .btn_login::after {
        background-color: #fff;
    }

    .btn_login:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .box_lien_register {
        font-size: small;
    }
}
</style>

<template>
    <div class="wrapper_home">
        <h1>Bienvenue sur This Social</h1>
        <p>
            Créez un compte ou connectez-vous à This Social. Connectez-vous avec
            vos amis, la famille et d'autres connaissances. Partagez des photos
            et vos publications avec tout le monde !
        </p>
        <div class="box_redirect_register">
            <p>Venez rejoindre la communauté this social !</p>
            <router-link to="/register">Inscrivez-vous</router-link>
        </div>

        <div class="box_redirect_login">
            <p>Vous possedez déjà un compte ? Connectez-vous !</p>
            <router-link to="/login">Connectez-vous</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_home h1 {
        width: 250px;
        color: #5db7de;
    }
    .wrapper_home {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        height: 80vh;
    }

    .box_redirect_register {
        border: 1px solid black;
    }
    .box_redirect_login {
        border: 1px solid black;
    }
}
</style>

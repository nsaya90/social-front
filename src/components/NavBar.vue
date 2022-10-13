<template>
    <div class="wrapper_header">
        <div class="box_lien">
            <router-link to="/">Home</router-link> |
            <router-link to="/register">Inscription</router-link>
            <router-view />
        </div>
        <div class="box_logo">
            <!-- <img
                src="../assets/logo_social.png"
                alt="logo"
                width="250"
                height="100"
            /> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    setup() {},
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .wrapper_header {
        height: 150px;
        display: flex;
        justify-content: space-around;
    }

    .box_logo {
        background-image: url(../assets/logo_social.png);
        height: 250px;
        width: 350px;
    }
}
</style>

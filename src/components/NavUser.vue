<template>
    <div class="wrapper_navBarUser">
        <div class="user-menu">
            <router-link to="/profil"
                ><img
                    src="https://img.icons8.com/ios/40/null/user-male-circle.png"
                />
            </router-link>
            <router-link to="/post"
                ><img src="https://img.icons8.com/ios/40/null/plus-2-math.png"
            /></router-link>

            <button class="button-2" @click="logout">
                <img
                    src="https://img.icons8.com/external-sbts2018-outline-sbts2018/40/000000/external-logout-social-media-basic-1-sbts2018-outline-sbts2018.png"
                />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavUser",
    methods: {
        logout() {
            localStorage.clear();
            window.location.href = "http://localhost:8080";
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    /* CSS */

    .wrapper_navBarUser {
        background-color: white;

        width: 100%;
    }
    .user-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 2px black solid;
        height: 83px;
    }

    .button-2 {
        background-color: white;
        border: none;
        height: 40px;
        width: 40px;
    }
}
</style>

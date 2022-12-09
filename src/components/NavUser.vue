<template>
    <div class="wrapper_navBarUser">
        <div class="user-menu">
            <router-link to="/profil"
                ><img
                    src="https://img.icons8.com/ios/40/null/user-male-circle.png"
            /></router-link>
            <router-link to="/post"
                ><img src="https://img.icons8.com/ios/40/null/plus-2-math.png"
            /></router-link>

            <button class="button-2" @click="logout">
                <img src="https://img.icons8.com/ios/40/null/exit.png" />
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

    .user-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .button-2 {
        background-color: white;
        border: none;
        height: 40px;
        width: 40px;
    }
}
</style>

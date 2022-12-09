<template>
    <nav>
        <div v-if="id_user">
            <router-link to="/post-thread"
                ><img
                    src="../src/assets/logo_social.png"
                    alt="logo"
                    width="140"
                    height="80"
                />
            </router-link>
        </div>
        <div v-else>
            <router-link to="/"
                ><img
                    src="../src/assets/logo_social.png"
                    alt="logo"
                    width="140"
                    height="80"
                />
            </router-link>
        </div>
    </nav>
    <router-view />
</template>
<script>
const id = localStorage.getItem("id");
export default {
    name: "App",
    data() {
        return {
            id_user: id,
        };
    },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap");
body {
    margin: 0;
    background-color: #d5d5d5;
}
p {
    font-family: "Noto Sans Mono", monospace;
}

h1 {
    font-family: "Roboto", sans-serif;
}
h3 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
}
nav {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    color: #5db7de;
}
</style>

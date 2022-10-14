<template>
    <nav>
        <router-link to="/"
            ><img
                src="../src/assets/logo_social.png"
                alt="logo"
                width="140"
                height="80"
            />
        </router-link>
    </nav>
    <router-view />
</template>
<script>
export default {
    name: "App",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,300&display=swap");
body {
    margin: 0;
}
p {
    font-family: "Noto Sans Mono", monospace;
}

h1 {
    font-family: "Roboto", sans-serif;
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

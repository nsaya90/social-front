<template>
    <div class="box-user">
        <h4 class="post-user">{{ firstname }} {{ lastname }}</h4>
        <p class="post-desc">{{ description }}</p>
    </div>

    <img :src="path" class="box-img" />
</template>

<script>
export default {
    name: "Post",
    data() {
        return {};
    },
    props: ["path", "firstname", "lastname", "description"],
    methods: {},
};
</script>

<style>
.box-img {
    width: 100%;
    height: auto;
    background-position: center;
    background-size: cover;
}

.post-desc {
    height: auto;
    margin-left: 10px;
    margin: 0;
}

.post-user {
    margin-left: 10px;
}

.box-user {
    display: flex;
    align-items: center;
}
</style>

<template>
    <img :src="path" class="box_img" />

    <p class="post-title">{{ title }}</p>
    <p class="post-desc">{{ description }}</p>

    <!-- <img class="box-img" :src="`http://localhost:8000/storage/${elem.image}`" />
    <p class="post-title">{{ elem.title }}</p>
    <p class="post-desc">{{ elem.description }}</p> -->
</template>

<script>
export default {
    name: "Post",
    data() {
        return {};
    },
    props: ["path", "title", "description"],
    methods: {},
};
</script>

<style>
.box_img {
    width: 300px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.post-title {
    background: #bad7dd;
    height: 50px;
    margin: 0;
    font-weight: bolder;
}
.post-desc {
    background: #bad7dd;
    height: auto;
    margin: 0;
}
</style>

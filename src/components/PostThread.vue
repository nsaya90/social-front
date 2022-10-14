<template>
    <div class="wrapper-thread">
        <h1>Fil d'actualité</h1>
        <div class="box_post" v-for="elem in infos" :key="elem.id">
            <img
                class="box-img"
                :src="`http://localhost:8000/storage/${elem.image}`"
            />
            <p class="post-title">{{ elem.title }}</p>
            <p class="post-desc">{{ elem.description }}</p>
            <p class="like">Like : {{ elem.like }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "PostThread",
    data() {
        return {
            post: "",
            infos: "",
            image: "",
        };
    },
    async mounted() {
        await axios({
            method: "get",
            url: "http://127.0.0.1:8000/api/all-post",
        }).then((response) => (this.infos = response.data.allPost));

        console.log(this.infos);
        this.image = this.infos.image;
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .box-img {
        width: 250px;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .box_post {
        border: 2px black solid;
        margin: 0;
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
}
</style>

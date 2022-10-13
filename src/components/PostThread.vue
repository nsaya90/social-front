<template>
    <h1>Fil d'actualité</h1>
    <div class="box_post" v-for="elem in infos" :key="elem.id">
        <p>{{ elem.title }}</p>
        <p>{{ elem.description }}</p>
        <img
            :src="`http://localhost:8000/storage/${elem.image}`"
            height="150"
            width="250"
        />
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
}
</style>

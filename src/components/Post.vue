<template>
    <h1 class="titre_post">Publication</h1>

    <form class="form_upload" action="upload-photo" @submit.prevent>
        <h2>Selectionné une photo</h2>

        <input
            class="file-input"
            type="file"
            @change="file"
            accept=".png, .jpg, .jpeg"
        />
        <button class="btn_upload" @click="upload" formaction="upload-photo">
            Valider
        </button>
        <h3 v-if="uploadSucces">{{ uploadSucces }}</h3>
    </form>

    <form class="form_post" action="post-publication" @submit.prevent>
        <input type="text" v-model="title" placeholder="Titre" />
        <!-- <p class="errors" v-if="this.errors.title" v-text="errors.title[0]"></p> -->

        <textarea
            type="text"
            v-model="description"
            placeholder="Description"
            rows="4"
            cols="50"
        />
        <p
            class="errors"
            v-if="this.errors.description"
            v-text="errors.description[0]"
        ></p>

        <button class="btn_post" @click="post" formaction="post-publication">
            Publié !
        </button>
    </form>
</template>

<script>
import axios from "axios";
export default {
    name: "Post",
    data() {
        return {
            title: "",
            description: "",
            image: "",
            info: "",
            urlImage: "",
            uploadSucces: "",
            errors: "",
        };
    },
    methods: {
        file(e) {
            this.image = e.target.files[0];
            console.log(this.image);
        },
        async upload() {
            const formData = new FormData();

            formData.set("image", this.image);
            await axios
                .post("http://127.0.0.1:8000/api/upload", formData)
                .then((response) => (this.urlImage = response.data));
            console.log(this.urlImage.message);
            this.uploadSucces = this.urlImage.message;
        },
        async post() {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/api/post",

                data: {
                    title: this.title,
                    description: this.description,
                    image: this.urlImage,
                    id_user: 1,
                },
            })
                .then((response) => (this.info = response.data))
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
            console.log(this.errors);

            // location = "http://localhost:8080/post-thread";
        },
    },
};
</script>

<style>
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .titre_post {
        text-align: center;
    }
    .form_upload {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form_post {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }

    .btn_upload {
        position: relative;
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.5em 0.8em;
        display: inline-block;
        border-radius: 6em;
        transition: all 0.2s;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: white;
        background-color: #5db7de;
        margin: 10px;
    }

    .btn_upload:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn_upload:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn_upload::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    .btn_upload::after {
        background-color: #fff;
    }

    .btn_upload:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }

    .form_post input,
    textarea {
        margin: 15px;
        color: #5db7de;
    }
    .form_post label {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .form_post input {
        height: 25px;
    }

    .btn_post {
        position: relative;
        font-size: 17px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 1em 1.5em;
        display: inline-block;
        border-radius: 6em;
        transition: all 0.2s;
        border: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-weight: 500;
        color: white;
        background-color: #5db7de;
        margin: 10px;
    }

    .btn_post:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    .btn_post:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }

    .btn_post::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    .btn_post::after {
        background-color: #fff;
    }

    .btn_post:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
}
</style>

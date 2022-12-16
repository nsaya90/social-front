<template>
    <button class="button-16">
        <img :src="icon" />
        <p>{{ name }}</p>
    </button>
</template>

<script>
export default {
    name: "ButtonComment",

    props: ["icon", "name"],
};
</script>

<style>
/* CSS */
.button-16 p {
    font-weight: bolder;
    color: #4285f4;
}
.button-16 {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 4px;
    font-family: arial, sans-serif;
    font-size: 14px;
    height: 36px;
    line-height: 27px;
    min-width: 54px;
    padding: 0 16px;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: pre;
}
</style>

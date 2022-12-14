<template>
    <button class="button-16"><img :src="icon" /> {{ like }}</button>
</template>

<script>
export default {
    name: "ButtonLike",

    props: ["like", "icon"],
};
</script>

<style>
/* CSS */
.button-16 {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    border-radius: 4px;
    color: #3c4043;
    cursor: pointer;
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

.button-16:hover {
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
}

.button-16:focus {
    border-color: #4285f4;
    outline: none;
}
</style>

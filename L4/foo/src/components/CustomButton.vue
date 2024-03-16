<script>
export default {
    props: {
        innerText: String,
        bgColor: String,
        textColor: String,
    },
}
</script>

<template>
    <button :style="{ backgroundColor: bgColor, color: textColor }">{{ innerText }}</button>
</template>
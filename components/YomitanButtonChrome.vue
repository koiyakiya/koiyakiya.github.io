<template>
        <button class="bg-blue-500 hover:bg-blue-700 transition py-2 px-3 rounded">
            <a target="_blank" :href="buttonLink" class="flex items-center gap-1" style="text-decoration: none; color: white; font-weight: bold;">
                <Icon icon="ri:chrome-fill" width="25px" />
                {{ buttonText }}
            </a>
        </button>   
</template>

<script>

export default {
    props: {
        buttonText: {
            type: String,
            required: true
        },
        buttonLink: {
            type: String,
            required: true
        },
    }
};
</script>
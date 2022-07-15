<script setup>
import { computed } from 'vue';

const props = defineProps({
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'text-white'
        : '';
});
</script>

<template>
    <div>
        <li :class="classes">
            <slot />
        </li>
    </div>
</template>

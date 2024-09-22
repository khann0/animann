<template>
    <div ref="block" class="block">
        <CursorAnimatedBorderItem v-for="i in 3" :key="i" v-bind="mouseCoords" />
    </div>
</template>

<script setup lang="ts">
const block = ref<HTMLElement | null>(null);

const mouseCoords = reactive({
    x: 0,
    y: 0,
});

onMounted(() => {
    if (block.value) {
        block.value.addEventListener('mousemove', (event: MouseEvent) => {
            mouseCoords.x = event.clientX;
            mouseCoords.y = event.clientY;
        });
    }
});
</script>

<style lang="scss" scoped src="./styles.scss" />

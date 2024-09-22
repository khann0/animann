<template>
    <div ref="item" class="item">
        <div class="item__display">
            <p class="item__display__y">Элемент (left/top): {{ xLeft.toFixed(2) }}, {{ yTop.toFixed(2) }}</p>
            <p class="item__display__x">Курсор относительно окна: {{ x.toFixed(2) }}, {{ y.toFixed(2) }}</p>
            <p class="item__display__y">Курсор относительно элемента: {{ xCursor.toFixed(2) }}, {{ yCursor.toFixed(2) }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface Props {
    x: number;
    y: number;
}

const props = defineProps<Props>();

const item = ref<HTMLElement | null>(null);

const xLeft = ref(0);
const yTop = ref(0);

const xCursor = computed(() => props.x - xLeft.value);
const yCursor = computed(() => props.y - yTop.value);

watch([xCursor, yCursor], () => {
    if (item.value) {
        item.value.style.setProperty('--mouse-x', `${xCursor.value}px`);
        item.value.style.setProperty('--mouse-y', `${yCursor.value}px`);
    }
});

onMounted(() => {
    if (item.value) {
        xLeft.value = item.value.getBoundingClientRect().left;
        yTop.value = item.value.getBoundingClientRect().top;
    }
});
</script>

<style lang="scss" scoped src="./styles.scss" />

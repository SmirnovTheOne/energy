<template>
  <button
    class="tab-button"
    :class="{ active: isActive }"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
  isActive: Boolean
});

defineEmits(['click']);
</script>

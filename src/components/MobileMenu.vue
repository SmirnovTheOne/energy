<script setup>
const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
  <!-- Боковое меню -->
  <div
    class="menu-overlay"
    v-if="isOpen"
    @click="$emit('close')"
  ></div>
  <aside
    class="side-menu"
    :class="{ 'open': isOpen }"
  >
    <!-- Содержимое меню -->
    <nav class="menu-content">
      <div class="menu-h menu-container">
        <a href="tel:89105802425" class="menu-phone">
          <span class="h-phone-text">8 (910) 580-24-25</span>
        </a>

        <button
          class="close-btn"
          @click="$emit('close')"
        >
          <img src="@/assets/icons/btn-burger-close.svg" alt="btn-burger" class="btn-burger-img" />
        </button>
      </div>

      <div class="menu-body menu-container">
        <div class="menu-title">Программы</div>
        <a href="#" class="menu-item">Есть контакт!</a>
        <a href="#" class="menu-item">Автобиатлон</a>
        <a href="#" class="menu-item">Level Up!</a>
        <a href="#" class="menu-item">Новые рекорды</a>
        <a href="#" class="menu-item">Команда года</a>
      </div>

      <div class="menu-order-block menu-container">
        <img src="@/assets/icons/polygon/burger-menu.svg" alt="Декоративный элемент" class="bm-polygon" />
        <button class="btn-order">заказать программу</button>
      </div>
    </nav>
  </aside>
</template>

<style scoped lang="scss">
@use '@/assets/scss/components/_app-mobile-menu';
</style>

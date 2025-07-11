<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MobileMenu from '@/components/MobileMenu.vue'

const isFixed = ref(false)
const headerHeight = ref(0)
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isFixed.value = window.scrollY > 50
}

onMounted(() => {
  // Замеряем реальную высоту хедера
  headerHeight.value = document.querySelector('.header').offsetHeight
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="header-container">
    <header
      class="header"
      :class="{ fixed: isFixed }"
      :style="{ '--header-height': `${headerHeight}px` }"
    >
      <div class="h-container">
        <!-- Логотип -->
        <div class="h-logo">
          <img src="@/assets/images/h-logo.png" alt="Логотип Vityaz Group" class="h-logo-img" />
        </div>
        <!-- Телефон (виден на десктопе) -->
        <div class="h-user-btn">
          <a href="tel:89105802425" class="header__phone">
            <img src="@/assets/icons/phone.svg" alt="phone Vityaz Group" class="h-phone-img" />
            <span class="h-phone-text">8 (910) 580-24-25</span>
          </a>
          <button
            class="h-menu-toggle"
            @click="toggleMenu"
          >
            <img src="@/assets/icons/btn-burger-open.svg" alt="btn-burger" class="btn-burger-img" />
          </button>
          <!-- Меню открывается по клику на кнопку-гамбургер -->
          <button id="contact" class="btn contact-btn">связаться с нами</button>
        </div>
      </div>
      <MobileMenu :is-open="isMenuOpen" @close="closeMenu" />
    </header>
    <!-- Placeholder-элемент (блокируем сдвиг контента) -->
    <div
      class="header-placeholder"
      :style="{ height: isFixed ? `${headerHeight}px` : '0' }"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-header';

</style>

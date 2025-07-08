<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isFixed = ref(false)
const headerHeight = ref(0)

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
          <a href="tel:89105802425" class="header__phone desktop-only">
            <img src="@/assets/icons/phone.svg" alt="phone Vityaz Group" class="h-phone-img" />
            8 (910) 580-24-25
          </a>
          <button id="contact" class="btn contact-btn">связаться с нами</button>
        </div>
      </div>
    </header>
    <!-- Placeholder-элемент (резервирует место) -->
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

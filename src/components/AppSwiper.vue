<script setup>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]
const instanceId = `pagination-${Math.random().toString(36).substring(2, 9)}`

const props = defineProps({
  imageNames: {
    type: Array,
    required: true,
    default: () => ['base'] // По умолчанию 'base'
  }
})

// Безопасное создание slides
const slides = computed(() => {
  return props.imageNames.map((name, index) => ({
    id: index + 1,
    img: `/src/assets/images/${name}.png`, // Путь к основному изображению
    thumbnail: `/src/assets/icons/${name}-thumb.jpg`, // Путь к миниатюре
    alt: `Slide ${index + 1}`
  }))
})
</script>

<template>
  <div class="swiper-container">
    <Swiper
      :modules="modules"
      :pagination="{ clickable: true, el: '.' + instanceId, type: 'bullets' }"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :slides-per-view="1"
      class="main-swiper"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id">
        <div class="slide-container">
          <img :src="slide.img" :alt="slide.alt" class="slide-img" />
          <!-- Иконка поверх изображения -->
          <div class="camera-icon">
            <img src="@/assets/icons/photo.svg" alt="Camera" class="camera-icon__img" />
          </div>
        </div>
      </SwiperSlide>
      <!-- Кастомные элементы управления -->
      <div class="swiper-btn-order">
        <div class="swiper-btn-text">заказать программу</div>
      </div>
      <div class="swiper-button-prev">
        <img src="@/assets/icons/bx-chevron-left.svg" alt="Camera" class="button-prev-svg" />
      </div>
      <div class="swiper-button-next">
        <img src="@/assets/icons/bx-chevron-right.svg" alt="Camera" class="button-next-svg" />
      </div>
    </Swiper>
    <!-- Иконка фотоаппарата -->
    <!-- Кастомный контейнер для пагинации -->
    <div :class="instanceId"></div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-swiper';
</style>

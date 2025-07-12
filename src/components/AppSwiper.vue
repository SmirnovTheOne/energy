<script setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AppModalSwiper from '@/components/AppModalSwiper.vue' // добавил вызов компонента AppModalSwiper

const modules = [Navigation, Pagination]
const instanceId = `pagination-${Math.random().toString(36).substring(2, 9)}`
const showModal = ref(false)

const props = defineProps({
  imageNames: {
    type: Array,
    required: true,
    default: () => ['base'] // По умолчанию 'base'
  }
})

// Создал объект slides на основе переданных имён изображений
const slides = computed(() => {
  return props.imageNames.map((name, index) => {
    const imgUrl = new URL(`../assets/images/${name}.png`, import.meta.url).href
    const thumbUrl = new URL(`../assets/icons/${name}-thumb.jpg`, import.meta.url).href

    return {
      id: index + 1,
      img: imgUrl,
      thumbnail: thumbUrl,
      alt: `Slide ${index + 1}`
    }
  })
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
        </div>
      </SwiperSlide>
      <!-- Кастомные элементы управления -->
      <!-- Элемент вызова модального окна с слайдером -->
      <div class="camera-icon" @click="showModal = true">
        <img src="@/assets/icons/photo.svg" alt="Camera" class="camera-icon__img" />
      </div>
      <!-- Кнопка заказа программы -->
      <a href="#" class="swiper-btn-order">
        <div class="swiper-btn-text">заказать программу</div>
      </a>
      <!-- Кнопки переключений -->
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
    <a href="#" class="swiper-btn-order-mob">
      <div class="swiper-btn-text">заказать программу</div>
    </a>
    <!-- Модальное окно со слайдером -->
    <AppModalSwiper
      :show="showModal"
      :slides="slides"
      @close="showModal = false"
    />
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-swiper';
</style>

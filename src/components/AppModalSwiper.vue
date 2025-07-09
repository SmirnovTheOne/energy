<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  show: Boolean,
  slides: Array, // Принимаем слайды из родителя
})

const emit = defineEmits(['close'])
const modules = [Navigation, Pagination]
</script>

<template>
  <div v-if="show" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <Swiper
        :modules="modules"
        :pagination="{ clickable: true, el: '.pagination-modal', type: 'bullets' }"
        :navigation="{ nextEl: '.modal-swiper-button-next', prevEl: '.modal-swiper-button-prev' }"
        :slides="props.slides"
        class="modal-swiper"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" :alt="slide.alt" class="modal-slide-img" />
        </SwiperSlide>
      </Swiper>
      <!-- Кастомные кнопки навигации -->
      <div class="modal-swiper-button-prev">
        <img
          src="@/assets/icons/bx-chevron-left.svg"
          alt="Previous"
          class="modal-swiper-button-svg"
        />
      </div>
      <div class="modal-swiper-button-next">
        <img src="@/assets/icons/bx-chevron-right.svg" alt="Next" class="modal-swiper-button-svg" />
      </div>
      <div class="pagination-modal"></div>
      <button class="modal-close" @click="emit('close')">
        <img src="@/assets/icons/btn-close.svg" alt="" class="modal-close-btn" />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-modal-swiper';
</style>

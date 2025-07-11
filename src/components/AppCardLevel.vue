<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
// import AppSeparator from '@/components/AppSeparator.vue'
const swiperImages = ['cl-slide', 'base', 'base']

// const category = 'quest' // уже использую в App.vue
</script>

<template>
  <section class="swr container">
    <div class="swr-wr">
      <div class="swr-lb">
        <div class="swr-title">Level Up!</div>
        <div class="swr-subTitle">
          Чемпионат по запуску беспилотных летательных аппаратов в стиле Flugtag — полный улет!
        </div>
        <div class="swr-desc-wr">
          <div class="swr-desc-1">
            Представьте, каждая команда — это конструкторское бюро, которое создает уникальный
            беспилотный летательный аппарат. Вы сможете стать гением самолетостроения, почувствовать
            нерв летных испытаний и одержать победу в конкурентной борьбе!
          </div>
          <div class="swr-desc-2">
            А самая зрелищная часть игры — презентация и запуск летательных аппаратов, создающая
            атмосферу настоящего авиашоу. Остроты придает желание поставить рекорд дальности полета.
            Пока он составляет 38 метров. У вас есть шанс улучшить этот результат.
          </div>
          <div class="swr-desc-3">
            <span>Бизнес-задача</span>: формирование и развитие навыков проектной
            работы в условиях конкурентной борьбы.
          </div>
        </div>
        <div class="swr-info-badges">
          <div class="swr-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="swr-badge-img" />
            <span class="swr-badge-text">1,5-2,5</span>
          </div>
          <div class="swr-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="swr-badge-img" />
            <span class="swr-badge-text">20-600</span>
          </div>
          <div class="swr-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="swr-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="swr-badge-img" />
          </div>
        </div>
      </div>
      <div class="swr-rb">
        <AppSwiper :image-names="swiperImages" />
      </div>
    </div>
<!--    <AppSeparator />-->
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-swiper-right';
</style>

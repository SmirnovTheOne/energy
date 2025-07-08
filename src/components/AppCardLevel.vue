<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
const swiperImages = ['base', 'base','base']
</script>

<template>
  <section class="cl container">
    <div class="cl-wr">
      <div class="cl-lb">
        <div class="cl-title">Level Up!</div>
        <div class="cl-subTitle">
          Чемпионат по запуску беспилотных летательных аппаратов в стиле Flugtag — полный улет!
        </div>
        <div class="cl-desc-wr">
          <div class="cl-desc-1">
            Представьте, каждая команда — это конструкторское бюро, которое создает уникальный
            беспилотный летательный аппарат. Вы сможете стать гением самолетостроения, почувствовать
            нерв летных испытаний<br> и одержать победу в конкурентной борьбе!
          </div>
          <div class="cl-desc-2">
            А самая зрелищная часть игры — презентация и запуск летательных аппаратов, создающая
            атмосферу настоящего авиашоу. Остроты придает желание поставить рекорд дальности полета.
            Пока он составляет 38 метров. У вас есть шанс улучшить этот результат.
          </div>
          <div class="cl-desc-3">
            <span>Бизнес-задача</span>: формирование и развитие навыков проектной
            работы в условиях конкурентной борьбы.
          </div>
        </div>
        <div class="cl-info-badges">
          <div class="cl-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="cl-badge-img" />
            <span class="cl-badge-text">1,5-2,5</span>
          </div>
          <div class="cl-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="cl-badge-img" />
            <span class="cl-badge-text">20-600</span>
          </div>
          <div class="cl-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="cl-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="cl-badge-img" />
          </div>
        </div>
      </div>

      <div class="cl-rb">
        <AppSwiper :image-names="swiperImages"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-level';
</style>

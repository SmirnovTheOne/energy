<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
// import AppSeparator from '@/components/AppSeparator.vue'
const swiperImages = ['ct-slide', 'base', 'base']

// const category = 'active' // уже использую в App.vue
</script>

<template>
  <section class="swr container">
    <div class="swr-wr">
      <div class="swr-lb">
        <div class="swr-title">Команда года</div>
        <div class="swr-subTitle">
          Идеальная возможность для активного отдыха, сплочения и улучшения коммуникации.
        </div>
        <div class="swr-desc-wr">
          <div class="swr-desc-1">
            Команда года – это несложные испытания, понятная механика, объединяющий финал и ничего
            лишнего.
          </div>
          <div class="swr-desc-2">
            Команды пройдут ряд парных испытаний, в которых от каждого участника потребуется
            активность, ловкость и смекалка. Но только слаженная работа всей команды даст
            необходимый результат.
          </div>
          <div class="swr-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление для создания
            мотивации, осознание себя частью крутой команды.
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
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-card-swiper-right';
</style>

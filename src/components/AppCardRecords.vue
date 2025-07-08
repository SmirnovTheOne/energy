<script setup>
import AppSwiper from '@/components/AppSwiper.vue'
import AppSeparator from '@/components/AppSeparator.vue'

const swiperImages = ['cr-slide', 'base', 'base']
</script>

<template>
  <section class="swl container">
    <div class="swl-wr">
      <div class="swl-lb">
        <AppSwiper :image-names="swiperImages" />
      </div>

      <div class="swl-rb">
        <div class="swl-title">Новые рекорды</div>
        <div class="swl-subTitle">
          Добро пожаловать на спартакиаду для амбициозных компаний, «заряженных» на максимальный
          результат.
        </div>
        <div class="swl-desc-wr">
          <div class="swl-desc-1">
            Это больше, чем игра — абсолютно новый формат спортивных соревнований. В вашем
            распоряжении масштабный, но безопасный игровой реквизит и куча испытаний с разной
            механикой. Физическая подготовка здесь ключевой роли не играет, залог победы — сила
            духа, командный настрой и правильное распределение ролей.
          </div>
          <div class="swl-desc-2">
            Финал игры - масштабное испытание с одновременным участием всех команд. Интрига
            сохраняется до последней секунды. Воля к победе решает все!
          </div>
          <div class="swl-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление для создания
            мотивации, осознание себя частью крутой команды.
          </div>
        </div>
        <div class="swl-info-badges">
          <div class="swl-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="swl-badge-img" />
            <span class="swl-badge-text">1,5-2,5</span>
          </div>
          <div class="swl-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="swl-badge-img" />
            <span class="swl-badge-text">20-600</span>
          </div>
          <div class="swl-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="swl-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="swl-badge-img" />
          </div>
        </div>
      </div>
    </div>
    <AppSeparator />
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-swiper-left';
</style>

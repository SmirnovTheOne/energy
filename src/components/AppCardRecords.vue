<script setup>
import AppSwiper from '@/components/AppSwiper.vue'

const swiperImages = ['base', 'base','base']
</script>

<template>
  <section class="cr">
    <img src="@/assets/icons/polygon/cr-polygon.svg" alt="Декоративный элемент" class="cr-polygon" />
    <div class="cr-wr container">
      <div class="cr-lb">
        <AppSwiper :image-names="swiperImages"/>
      </div>

      <div class="cr-rb">
        <div class="cr-title">Новые рекорды</div>
        <div class="cr-subTitle">
          Добро пожаловать на спартакиаду для амбициозных компаний, «заряженных» на максимальный
          результат.
        </div>
        <div class="cr-desc-wr">
          <div class="cr-desc-1">
            Это больше, чем игра — абсолютно новый формат спортивных соревнований. В вашем
            распоряжении масштабный, но безопасный игровой реквизит и куча испытаний с разной
            механикой. Физическая подготовка здесь ключевой роли не играет, залог победы — сила
            духа, командный настрой и правильное распределение ролей.
          </div>
          <div class="cr-desc-2">
            Финал игры - масштабное испытание с одновременным участием всех команд. Интрига
            сохраняется до последней секунды. Воля к победе решает все!
          </div>
          <div class="cr-desc-3">
            <span>Бизнес-задача</span>: эмоциональное воодушевление для создания
            мотивации, осознание себя частью крутой команды.
          </div>
        </div>
        <div class="cr-info-badges">
          <div class="cr-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="cr-badge-img" />
            <span class="cr-badge-text">1,5-2,5</span>
          </div>
          <div class="cr-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="cr-badge-img" />
            <span class="cr-badge-text">20-600</span>
          </div>
          <div class="cr-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="cr-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="cr-badge-img" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-card-records';
</style>

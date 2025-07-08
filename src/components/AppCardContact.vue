<script setup>
import AppSwiper from '@/components/AppSwiper.vue'

const swiperImages = ['base', 'base', 'base']
</script>

<template>
  <section class="cc container">
    <div class="cc-wr">
      <div class="cc-lb">
        <div class="cc-title">Есть контакт!</div>
        <div class="cc-subTitle">
          Помните металлический конструктор из детства? А теперь умножьте размер деталей и масштаб
          эмоции на 150!
        </div>
        <div class="cc-desc-wr">
          <div class="cc-desc-1">
            В вашем распоряжении — самый большой конструктор в России. В ходе игры участникам
            предстоит изучить чертежи, собрать механизмы и выявить принцип взаимодействия элементов
            системы. Результатом работы станет запуск цепной реакции.
          </div>
          <div class="cc-desc-2">
            Игровой процесс позволяет отработать действия команды в условиях изменяющейся внешней
            среды и принимать решения при недостатке информации.
          </div>
          <div class="cc-desc-3">
            <span>Бизнес-задача</span>: развитие навыков сотрудничества, формирование
            ответственности за выполненную работу, осознание себя частью крутой команды.
          </div>
        </div>
        <div class="cc-info-badges">
          <div class="cc-badge">
            <img src="@/assets/icons/clock-three.svg" alt="time" class="cc-badge-img" />
            <span class="cc-badge-text">1,5-2,5</span>
          </div>
          <div class="cc-badge">
            <img src="@/assets/icons/users-alt.svg" alt="time" class="cc-badge-img" />
            <span class="cc-badge-text">20-600</span>
          </div>
          <div class="cc-badge">
            <img src="@/assets/icons/building.svg" alt="time" class="cc-badge-img" />
            /
            <img src="@/assets/icons/trees.svg" alt="time" class="cc-badge-img" />
          </div>
        </div>
      </div>

      <div class="cc-rb">
        <AppSwiper :image-names="swiperImages"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '@/assets/scss/components/_app-card-contact';
</style>

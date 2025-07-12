<script setup>
</script>

<template>
  <section class="clients">
    <div class="clients-wr container">
      <div class="clients-head">
        <div class="clients-title">Уже зарадились по полной!</div>
        <div class="clients-desc">
          Командообразующие приключения выбирают компании-лидеры. Зарадитесь и вы вместе с «Витязь Групп».
        </div>
      </div>
    </div>
    <div class="clients-main">
      <div class="clients-slider">
        <div class="slider-item">
          <img src="@/assets/images/client1.png" alt="client" class="slider-item-img" />
        </div>
        <div class="slider-item">
          <img src="@/assets/images/client2.png" alt="client" class="slider-item-img" />
        </div>
        <div class="slider-item">
          <img src="@/assets/images/client3.png" alt="client" class="slider-item-img" />
        </div>
        <div class="slider-item">
          <img src="@/assets/images/client4.png" alt="client" class="slider-item-img" />
        </div>
      </div>
    </div>
    <img
      src="@/assets/icons/polygon/clients-polygon.svg"
      alt="Vityaz Group"
      class="clients-polygon-1920"
    >
    <img
      src="@/assets/icons/polygon/clients-polygon-1366.svg"
      alt="Vityaz Group"
      class="clients-polygon-1366"
    >
    <img
      src="@/assets/icons/polygon/clients-polygon-992.svg"
      alt="Vityaz Group"
      class="clients-polygon-992"
    >
    <img
      src="@/assets/icons/polygon/clients-polygon-576.svg"
      alt="Vityaz Group"
      class="clients-polygon-576"
    >
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-clients';
</style>

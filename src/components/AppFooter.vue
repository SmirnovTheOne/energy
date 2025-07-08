<script>
</script>

<template>
  <footer class="footer">
    <img
      src="@/assets/icons/polygon/footer-polygon.svg"
      alt="Декоративный элемент"
      class="f-polygon"
    />

    <div class="f-container">

      <!-- Первая колонка -->
      <div class="f-col-1">
        <div class="f-logo">
          <img src="@/assets/images/h-logo.png" alt="Логотип Vityaz Group" class="f-logo-img" />
        </div>
        <ul class="col-ul-wrap">
          <li class="f-text">© Vityaz Group</li>
          <li class="f-text">— организация командных приключений, 2022</li>
        </ul>
        <div class="f-btn-wr">
          <button id="contact" class="btn contact-btn">связаться с нами</button>
        </div>
      </div>

      <!-- Вторая колонка -->
      <div class="f-col-2">
        <h4 class="f-col-th">
          КОНТАКТЫ
        </h4>
        <ul class="col-ul-wrap">
          <li>
            <a href="mailto:info@vityazgroup.ru" class="f-mailto link">info@vityazgroup.ru</a>
          </li>
          <li>
            <a href="tel:89105802425" class="f-phone"> 8 (910) 580-24-25 </a>
          </li>
        </ul>
      </div>

      <!-- Третья колонка -->
      <div class="f-col-3">
        <h4 class="f-col-th">
          МЫ В СОЦСЕТЯХ
        </h4>
        <ul class="col-ul-wrap">
          <li>
            <a href="#" class="f-social">ВKонтакте</a>
          </li>
          <li>
            <a href="#" class="f-social">Telegram</a>
          </li>
          <li>
            <a href="#" class="f-social">YouTube</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/components/_app-footer';
</style>

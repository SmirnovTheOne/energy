<script setup>

</script>

<template>
  <div class="container">
    <div class="separator"></div>
  </div>
</template>

<style lang="scss" scoped>

.separator {
  width: 100%;
  padding-bottom: rem(64px);
  border-bottom: 1px solid $vt-c-black;
}

@media (max-width: 992px) {
  .separator {
    width: 100%;
    padding-bottom: rem(48px);
    border-bottom: 2px solid $vt-c-black;
  }
}

@media (max-width: 576px) {
  .separator {
    width: 100%;
    padding-bottom: rem(32px);
    border-bottom: 2px solid $vt-c-black;
  }
}
</style>

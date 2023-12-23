<template>
  <div class="sidebar">
    <img src="/assets/icons/label-icon.svg" alt="Tomsk polytech logo." class="sidebar__logo">
    <!-- <slot>

    </slot> -->
    <!-- <div class="contant-info">
      <p>Если возникла проблема, то можете написать <span class="contant-info__description__links">Алёне из
          Сибтеха</span>
      </p>
      <p>С любовью, ваш <span class="contant-info__description__links">Сибтех</span> </p>
    </div> -->
    <button class="btn" v-if="buttonText" :class="modeBtn">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: [
    "buttonText",
    "modeBtn"]
}
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 8rem 12.22vw 6.2rem;
}

.sidebar__logo {
  width: 11.7rem;
}
</style>
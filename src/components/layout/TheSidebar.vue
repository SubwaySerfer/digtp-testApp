<template>
  <div class="sidebar">
    <img src="/assets/icons/label-icon.svg" alt="Tomsk polytech logo." class="sidebar__logo">
    <slot class="sidebar__slot">

    </slot>
    <!-- <div class="contant-info">
      <p>Если возникла проблема, то можете написать <span class="contant-info__description__links">Алёне из
          Сибтеха</span>
      </p>
      <p>С любовью, ваш <span class="contant-info__description__links">Сибтех</span> </p>
    </div> -->
    <div class="buttons-block">
      <button v-if="secondButton" class="btn" :class="secModeBtn">{{ secondButton }}</button>
      <button class="btn " v-if="buttonText" :class="modeBtn">{{ buttonText }}</button>
    </div>

  </div>
</template>

<script>
export default {
  props: [
    "buttonText",
    "modeBtn",
    "secondButton",
    "secModeBtn"]
}
</script>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 8rem 9.5rem 7.1rem 11.47vw;
  width: 41.98rem;
  gap: 3rem;
}



.sidebar__logo {
  width: 11.7rem;
}

.buttons-block {
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 7.2vh;
}
</style>
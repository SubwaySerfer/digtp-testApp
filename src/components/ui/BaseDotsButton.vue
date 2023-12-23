<template>
  <button class="dot-button">
    <h6 class="dot-button__label">{{ buttonText }}</h6>
    <img src="/assets/icons/plus-icon.svg" alt="green plus." />
  </button>
</template>

<script>
export default {
  props: ['buttonText']
}
</script>

<style scoped>
.dot-button {
  display: flex;
  padding: 2.1rem 3rem 2rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  border: 1px dashed #3EA748;
  width: 41.5rem;
  background: #F9F9F9;
  ;
}

.dot-button__label {
  color: #3EA748;
  font-family: 'PT Sans', sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-wrap: nowrap;
}
</style>
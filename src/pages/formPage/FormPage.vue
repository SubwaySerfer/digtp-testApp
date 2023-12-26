<template>
  <main class="form-wrapper">

    <signup-form></signup-form>
  </main>
</template>

<script>
import SignupForm from '../../components/editField/SignupForm.vue';

export default {
  components: { SignupForm }
}
</script>
<style scoped>
.form-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
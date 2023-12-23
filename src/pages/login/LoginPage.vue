<template>
  <main class="login-page">
    <div class="signin-block">
      <img src="/assets/icons/label-icon.svg" alt="Tomsk polytech logo." class="signin-block__logo">
      <login-form></login-form>
      <div class="contant-info">
        <p>Если возникла проблема, то можете написать <span class="contant-info__description__links">Алёне из
            Сибтеха</span>
        </p>
        <p>С любовью, ваш <span class="contant-info__description__links">Сибтех</span> </p>
      </div>
    </div>
    <login-background></login-background>
  </main>
</template>

<script>
import LoginForm from '../../components/login/loginForm.vue';
import LoginBackground from '../../components/login/LoginBackground.vue'

export default {
  components: { LoginForm, LoginBackground }
}
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  /* height: 100%; */
}

.signin-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 8rem 12.22vw 6.2rem;
}

.signin-block__logo {
  width: 11.7rem;
}

.contant-info {
  display: flex;
  flex-direction: column;
  text-align: start;
  align-items: start;
  gap: .8rem;
  color: var(--Untitled-text-2-color, #676767);
  width: 26rem;
  font-family: Cera Pro;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: -0.064rem;
}

.contant-info__description__links {
  color: #3EA748;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}
</style>
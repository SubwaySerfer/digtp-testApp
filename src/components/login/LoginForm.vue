<template>
  <form class="login-form">
    <label for="" class="login-form__label">Авторизация</label>
    <input class="login-form__input" type="text" placeholder="Логин">
    <input class="login-form__input" type="text" placeholder="Пароль">
    <button class="btn login-form__submit-btn" type="submit">Вход</button>
  </form>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-style: normal;
  flex: 1;
  margin-top: 2.7rem;
}

.login-form__label {
  font-size: 4rem;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 2rem;
}

.login-form__input {
  display: flex;
  width: 35rem;
  height: 7rem;
  padding: 0rem 27.4rem 0rem 3rem;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  border-radius: 1rem;
  border: none;
  background: #F6F6F6;
}

.login-form__submit-btn {
  margin-top: 2rem;
}
</style>